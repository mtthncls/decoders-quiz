import React, { Component } from 'react';
import { Button, Spinner, Row, Col } from 'reactstrap';
import Question from './Components/Question';
import ArticleSetChoice from './Components/ArticleSetChoice';
import HomePage from './Components/HomePage';
import './App.css';
import ArticlesRecap from './Components/ArticlesRecap';
import CustomizeQuizz from './Components/CustomizeQuizz';
import Categories from './Components/Categories';
import AlertArticleSaved from './Components/AlertArticleSaved';


class App extends Component {
  constructor() {
    super()
    this.state = {
      isHomePageDisplayed: true, //display the home page 
      nameRegistered: "", //stock username after user wrote it in the input area then clicked on Play button
      isThemePageDisplayed: false, //display the choose theme page 
      isCustomizePageDisplayed: false, //display the custom page
      isQuestionDisplayed: false,
      isQuestionLoading: true,
      questions: [],
      currentQuestionID: 0,
      isQuestionAnswered: false, //Question component : has one button been clicked or not ?
      buttonClicked: "",   //Question component : which button has been clicked ?
      isButtonDisabled: false, //Question component : button clickable or not
      categories: ["Animals", "Sport", "Books", "Movies", "Music", "Video Games",
        "Mythology", "Celebrities", "General Knowledge", "Television", "Geography", "History"],
      numberOfQuestions: ["5", "10", "15"],
      choosenNumberOfQuestions: 0,
      difficulties: ["easy", "medium", "hard"],
      chosenDifficulty: "",
      currentArticleID: 0,
      questionsCategory: {
        id: 0,
        catTitle: ""
      },
      isQuizzLaunched: false, //launch quizz when Play button is clicked and state switched to true
      isNewsDisplayed: false,
      isAnswerCorrect: false, //Question component : is the answer true or false ?
      isArticleDisplayed: false,
      currentNewsArticle: {}, //ArticleSetChoice component
      preferredNewsArticles: [], //ArticleSetChoice component
      isArticlesRecapDisplayed: false,
      correctAnswersCounter: 0,
      isAlertDisplayed: false,
      percentageOfGoodAnswers: 0,
      isArticleSaved : false
    };
  };




  //to randomize the order of apperance of the answers on screen
  randomizeAnswersDisplay = (answers) => {
    let currentIndex = answers.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = answers[currentIndex];
      answers[currentIndex] = answers[randomIndex];
      answers[randomIndex] = temporaryValue;
    };
    return answers
  };

  // method for display the loading message
  displayLoading = () => {
    if (this.state.isQuestionLoading && this.state.isQuizzLaunched) {
      return (
        <div>
          <Spinner className="spinner" style={{ width: '5rem', height: '5rem' }} />
        </div>
      );
    };
  };

  // method for display the question component 
  displayQuestions = () => {
    if (this.state.questions.length > 0) {
      return (
        <div>
          <Question question={this.state.questions[this.state.currentQuestionID]}
            correctSpecialCharacters={this.correctSpecialCharacters}
            isButtonDisabled={this.state.isButtonDisabled}
            setAnswerStatus={this.setAnswerStatus}
            defineButtonColor={this.defineButtonColor}
            currentQuestionID={this.state.currentQuestionID} />
        </div>
      );
    };
  };

  //determine if the answer of clicked button is correct or incorrect and modify state accordingly including the correct answer counter
  setAnswerStatus = (answer, buttonIndex) => {
    this.setState({
      isAnswerCorrect: answer.correct,
      isQuestionAnswered: true,
      buttonClicked: buttonIndex,
      isButtonDisabled: true
    });
    if (answer.correct) {
      this.setState({ correctAnswersCounter: this.state.correctAnswersCounter + 1 })
    };
  };

  //change color of clicked button according to correctness of the answer and the button clicked
  defineButtonColor = (buttonIndex) => {
    if (this.state.questions !== []) {
      if (!this.state.isQuestionAnswered) {
        return "secondary";
      }
      else if (this.state.buttonClicked === buttonIndex
        && this.state.isQuestionAnswered
        && this.state.isAnswerCorrect) {
        return "success";
      }
      else if (this.state.buttonClicked === buttonIndex
        && this.state.isQuestionAnswered
        && !this.state.isAnswerCorrect) {
        return "danger";
      }
      else if (
        this.state.buttonClicked !== buttonIndex
        && this.state.isQuestionAnswered
        && !this.state.isAnswerCorrect
        && this.state.questions[this.state.currentQuestionID].answers[buttonIndex].correct) {
        return "success";
      }
      else if (
        this.state.buttonClicked !== buttonIndex
        && this.state.isQuestionAnswered
        && !this.state.questions[this.state.currentQuestionID].answers[buttonIndex].correct) {
        return "secondary";
      }
      return "";
    };
  };

  //allows to display article selection page after clicking 'next' button
  triggerArticleChoiceDisplay = () => {
    this.setState({ isQuestionDisplayed: false, isButtonDisabled: false, isArticleDisplayed: false });

    //These three const get the current Date, Month, and Date
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date().getDate();

    fetch(`https://newsapi.org/v2/everything?q=${this.state.questions[0].category}
           &from=${year}-${month}-${date}&sortBy=publishedAt&apiKey=8ff3d2c7ecb44abaa9d1db3eae9dfcc8`)
      .then(response => response.json())
      .then(responseInJson => this.setState({
        currentNewsArticle: responseInJson.articles,
        isArticleDisplayed: true
      }));
  };

  /*This method allow us to add elements from API in the array, it check if the array is empty,
  and create a new one to add objects at the next test (method calls) and go to the next question when click on yes button */
  memorizeArticle = () => {
    this.setState(function (prevState) {
      return {
        preferredNewsArticles: this.state.preferredNewsArticles.length === 0
          ? [this.state.currentNewsArticle[this.state.currentArticleID]]
          : [...prevState.preferredNewsArticles, this.state.currentNewsArticle[this.state.currentArticleID]]
      };
    });

    this.setState({ 
      isAlertDisplayed: true,
      isArticleSaved : true,
    });

    if (this.state.currentQuestionID < this.state.choosenNumberOfQuestions - 1) {
    window.setTimeout(() => this.setState({
      isQuestionAnswered: false, isQuestionDisplayed: true,
      currentQuestionID: this.state.currentQuestionID + 1,
      currentArticleID: this.state.currentArticleID + 1,
      isArticleDisplayed: false, isAlertDisplayed: false,
    }), 3000);
  }

    /*condition to display recap page*/
    if (this.state.currentQuestionID >= this.state.choosenNumberOfQuestions - 1) {
      window.setTimeout(()=> this.setState({ isAlertDisplayed: false, isQuestionDisplayed: false, 
                      isArticlesRecapDisplayed: true, isArticleDisplayed: false}), 3000);
      this.setState({
        percentageOfGoodAnswers:
          ((this.state.correctAnswersCounter / parseInt(this.state.choosenNumberOfQuestions)) * 100)
      })
       
    }
  };
  /*go to the next question when click on No button*/
  nextQuestion = () => {
    
    this.setState({ 
      isAlertDisplayed: true,
      isArticleSaved : false,
    });

    if (this.state.currentQuestionID < this.state.choosenNumberOfQuestions - 1) {
      window.setTimeout(() => this.setState({
        isQuestionAnswered: false, isQuestionDisplayed: true,
        currentQuestionID: this.state.currentQuestionID + 1,
        currentArticleID: this.state.currentArticleID + 1,
        isArticleDisplayed: false, isAlertDisplayed: false,
      }), 3000);
    }
  
      /*condition to display recap page*/
      if (this.state.currentQuestionID >= this.state.choosenNumberOfQuestions - 1) {
        window.setTimeout(()=> this.setState({ isAlertDisplayed: false, isQuestionDisplayed: false, 
                        isArticlesRecapDisplayed: true, isArticleDisplayed: false}), 3000);
        this.setState({
          percentageOfGoodAnswers:
            ((this.state.correctAnswersCounter / parseInt(this.state.choosenNumberOfQuestions)) * 100)
        })
         
      }
}


  pickUpCategory = (category) => {
    this.setState(prevState => ({
      questionsCategory: {
        ...prevState.questionsCategory,
        catTitle: category
      }
    }))
    switch (category) {
      case "Sport":
        this.setState(prevState => ({
          questionsCategory: {
            ...prevState.questionsCategory,
            id: 21
          }
        }));
        break;
      case "Animals":
        this.setState(prevState => ({
          questionsCategory: {
            ...prevState.questionsCategory,
            id: 27
          }
        }));
        break;
      case "Books":
        this.setState(prevState => ({
          questionsCategory: {
            ...prevState.questionsCategory,
            id: 10
          }
        }));
        break;
      case "Movies":
        this.setState(prevState => ({
          questionsCategory: {
            ...prevState.questionsCategory,
            id: 11
          }
        }));
        break;
      case "Music":
        this.setState(prevState => ({
          questionsCategory: {
            ...prevState.questionsCategory,
            id: 12
          }
        }));
        break;
      case "Video Games":
        this.setState(prevState => ({
          questionsCategory: {
            ...prevState.questionsCategory,
            id: 15
          }
        }));
        break;
      case "Mythology":
        this.setState(prevState => ({
          questionsCategory: {
            ...prevState.questionsCategory,
            id: 20
          }
        }));
        break;
      case "Celebrities":
        this.setState(prevState => ({
          questionsCategory: {
            ...prevState.questionsCategory,
            id: 26
          }
        }));
        break;
      case "Television":
        this.setState(prevState => ({
          questionsCategory: {
            ...prevState.questionsCategory,
            id: 14
          }
        }));
        break;
      case "General Knowledge":
        this.setState(prevState => ({
          questionsCategory: {
            ...prevState.questionsCategory,
            id: 9
          }
        }));
        break;
      case "Geography":
        this.setState(prevState => ({
          questionsCategory: {
            ...prevState.questionsCategory,
            id: 22
          }
        }));
        break;
      case "History":
        this.setState(prevState => ({
          questionsCategory: {
            ...prevState.questionsCategory,
            id: 23
          }
        }));
        break;
      default:
    };
  };

  //This method allow to display "Play" button at the beginning of the quizz, onClick = switch the state fromfalse to true (si isquizzlaunched:true, display question : true, article true 
  chooseUsernamePressEnter = (e) => {
    e.preventDefault()
    this.setState({
      isHomePageDisplayed: false,
      isThemePageDisplayed: true
    });
  }

  chooseUsername = (event) => {
    if (this.state.nameRegistered !== "")
      this.setState({
        isHomePageDisplayed: false,
        isThemePageDisplayed: true
      });
    event.preventDefault();
  };

  usernameChange = (event) => {
    this.setState({ nameRegistered: event.target.value });
  };

  chooseCategory = () => {
    this.state.questionsCategory.id === 0 ?
      this.setState({
        isThemePageDisplayed: true,
        isCustomizePageDisplayed: false
      })
      : this.setState({
        isThemePageDisplayed: false,
        isCustomizePageDisplayed: true
      });
  };

  quizzcustomize = () => {
    (this.state.choosenNumberOfQuestions === 0 || this.state.chosenDifficulty.length === 0)
      ?
      this.setState({
        isCustomizePageDisplayed: true,
        isQuizzLaunched: false,
        isQuestionDisplayed: false
      })
      : this.setState({
        isCustomizePageDisplayed: false,
        isQuizzLaunched: true,
        isQuestionDisplayed: true
      });

    // method for API call
    fetch(`https://opentdb.com/api.php?amount=${this.state.choosenNumberOfQuestions}&category=
         ${this.state.questionsCategory.id}&difficulty=${this.state.chosenDifficulty}&type=multiple`)
      .then(response => response.json())
      .then(data => {
        const apiQuestions = data.results
        const questions = []
        for (let i = 0; i < apiQuestions.length; i++) {
          const question = {
            category: apiQuestions[i].category,
            question: apiQuestions[i].question,
            answers: this.randomizeAnswersDisplay([
              { text: apiQuestions[i].correct_answer, correct: true },
              { text: apiQuestions[i].incorrect_answers[0], correct: false },
              { text: apiQuestions[i].incorrect_answers[1], correct: false },
              { text: apiQuestions[i].incorrect_answers[2], correct: false }
            ])
          };
          questions.push(question)
        };

        this.setState({
          questions: questions,
          isQuestionLoading: false
        });
      });
  }
  numberOfQuestionsChoice = (numberOfQuestions) => {
    this.setState({ choosenNumberOfQuestions: numberOfQuestions })
  }
  difficultiesChoice = (difficulty) => {
    this.setState({ chosenDifficulty: difficulty });
  }

  customMessage = () => {
    if (this.state.percentageOfGoodAnswers < 30) {
      return (
        <Row>
        <Col sm="12" md="6"><img src={'https://thumbs.gfycat.com/AcceptableJoyfulInganue-size_restricted.gif'} height="300rem" width="250rem" alt="bad"/></Col>
        <Col sm="12" md="6"><h3 className="mt-4">I'm not proud of you {this.state.nameRegistered}, you can do better!</h3></Col>
        </Row>
      )
    }
    if (this.state.percentageOfGoodAnswers >= 30 && this.state.percentageOfGoodAnswers <= 70) {
      return (
        <Row>
        <Col sm="12" md="6"><img src={'https://thumbs.gfycat.com/GiganticIdealisticAffenpinscher-small.gif'} height="200rem" width="300rem" alt="medium"/></Col>
        <Col sm="12" md="6"><h3 className="mt-4">Not so bad {this.state.nameRegistered}!</h3></Col>
        </Row>
      )
    }
    if (this.state.percentageOfGoodAnswers > 70) {
      return (
        <Row>
        <Col sm="12" md="6"><img src={'https://media.tenor.com/images/17233f6fbdb4e0488f92c8ebd1218cda/tenor.gif'} height="300rem" width="150rem" alt="nice"/></Col>
        <Col sm="12" md="6"><h3 className="mt-5">Good job {this.state.nameRegistered}, you are amazing !</h3></Col>
        </Row>  
      )
    }
  }
  // starting a new quiz after the recap page
  TryAgain = () => {
    this.setState({
      buttonClicked: "",
      categories: this.state.categories,
      choosenNumberOfQuestions: 0,
      chosenDifficulty: "",
      correctAnswersCounter: 0,
      currentArticleID: 0,
      currentNewsArticle: {},
      currentQuestionID: 0,
      difficulties: this.state.difficulties,
      isAnswerCorrect: false,
      isArticleDisplayed: false,
      isArticlesRecapDisplayed: false,
      isButtonDisabled: false,
      isCustomizePageDisplayed: false,
      isHomePageDisplayed: false,
      isNewsDisplayed: false,
      isQuestionAnswered: false,
      isQuestionDisplayed: false,
      isQuestionLoading: true,
      isQuizzLaunched: false,
      isThemePageDisplayed: true,
      nameRegistered: this.state.nameRegistered,
      numberOfQuestions: ["5", "10", "15"],
      preferredNewsArticles: [],
      questions: [],
      questionsCategory: {
        id: 0,
        catTitle: ""
      },
      isAlertDisplayed: false,
      percentageOfGoodAnswers: 0
    })
  };

  // starting a new quiz after the recap page
  NewPlayerButton = () => {
    this.setState({
      buttonClicked: "",
      categories: this.state.categories,
      choosenNumberOfQuestions: 0,
      chosenDifficulty: "",
      correctAnswersCounter: 0,
      currentArticleID: 0,
      currentNewsArticle: {},
      currentQuestionID: 0,
      difficulties: this.state.difficulties,
      isAnswerCorrect: false,
      isArticleDisplayed: false,
      isArticlesRecapDisplayed: false,
      isButtonDisabled: false,
      isCustomizePageDisplayed: false,
      isHomePageDisplayed: true,
      isNewsDisplayed: false,
      isQuestionAnswered: false,
      isQuestionDisplayed: false,
      isQuestionLoading: true,
      isQuizzLaunched: false,
      isThemePageDisplayed: false,
      nameRegistered: "",
      numberOfQuestions: ["5", "10", "15"],
      preferredNewsArticles: [],
      questions: [],
      questionsCategory: {
        id: 0,
        catTitle: ""
      },
      isAlertDisplayed: false,
      percentageOfGoodAnswers: 0
    })
  };
  correctSpecialCharacters = (string) => {
    return string.replace(/&quot;|&#039;/g, "'")
      .replace(/&rdquo;|&ldquo;/g, "\"")
      .replace(/&eacute;/g, "é")
      .replace(/&deg;/g, "°")
      .replace(/&pipeline;/g, "Π")
      .replace(/&amp;/g, "&")
      .replace(/&hellip;/g, "...")
      .replace(/&rsquo;/g, "'")
      .replace(/&aacute;/g, "á")
      .replace(/&uacute;/g, "ú")
  };

  render() {
    return (
      <div className="App">
        {this.state.isHomePageDisplayed &&
          <HomePage chooseUsername={this.chooseUsername}
            chooseUsernamePressEnter={this.chooseUsernamePressEnter}
            usernameChange={this.usernameChange}
            nameRegistered={this.state.nameRegistered} />}
        {this.state.isThemePageDisplayed &&
          <Categories chooseCategory={this.chooseCategory}
            pickUpCategory={this.pickUpCategory}
            categories={this.state.categories}
            nameRegistered={this.state.nameRegistered} catTitle={this.state.questionsCategory.catTitle} />}
        {this.state.isCustomizePageDisplayed &&
          <CustomizeQuizz quizzcustomize={this.quizzcustomize}
            numberOfQuestions={this.state.numberOfQuestions}
            numberOfQuestionsChoice={this.numberOfQuestionsChoice}
            difficulties={this.state.difficulties}
            DifficultiesChoice={this.difficultiesChoice}
            choosenDifficulty={this.state.chosenDifficulty}
            choosenNumberOfQuestions={this.state.choosenNumberOfQuestions} />}
        {this.displayLoading()}
        {this.state.isQuestionDisplayed && this.displayQuestions()}
        <div className="zoom-button transition">
          {this.state.isButtonDisabled &&
            <Button onClick={this.triggerArticleChoiceDisplay}>Next</Button>}
        </div>
        {!this.state.isQuestionDisplayed &&
          this.state.currentNewsArticle.length > 0 &&
          this.state.isArticleDisplayed &&
          <ArticleSetChoice currentArticle={this.state.currentNewsArticle[this.state.currentArticleID]}
            correctSpecialCharacters={this.correctSpecialCharacters}
            catTitle={this.state.questionsCategory.catTitle}
            addCurrentArticle={this.memorizeArticle}
            nextQuestion={this.nextQuestion} 
            isAlertDisplayed={this.state.isAlertDisplayed}/>}
        {this.state.isAlertDisplayed && <AlertArticleSaved isArticleSaved={this.state.isArticleSaved} />}
        {this.state.isArticlesRecapDisplayed &&
          <ArticlesRecap articlesToRecap={this.state.preferredNewsArticles}
            correctAnswersCounter={this.state.correctAnswersCounter}
            questions={this.state.questions}
            tryButton={this.TryAgain} newPlayer={this.NewPlayerButton}
            customMessage={this.customMessage} />}
      </div>
    )
  };
};

export default App;

