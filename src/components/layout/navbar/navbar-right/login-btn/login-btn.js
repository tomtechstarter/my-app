import { useState } from "react";
import StandardBtn from "../../../../common/buttons/standard-btn";

//Aufgabe 2: useState für Login/Logged In nutzen
//Macht es wie in Toms FollowBTN
//Hier alternative Lösung!
function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //Ich bereite 2 Variablen vor. Eine soll den Text, die andere die
  //passende onClick Function beinhalten
  let logInText = "";
  let onClick;

  function setIsLoggedInTrue() {
    setIsLoggedIn(true);
    console.log("True");
  }

  function setIsLoggedInFalse() {
    setIsLoggedIn(false);
    console.log("False");
  }

  // Da wir nicht returnen, gibt es eine else
  if (isLoggedIn) {
    //Wenn wir eingeloggt sind, muss der Button LogOut oder LoggedIn zeigen
    //und das klicken muss uns ausloggen ("isLoggedIn = false")
    logInText = "LogOut";
    onClick = setIsLoggedInFalse;
  } else {
    logInText = "LogIn";
    onClick = setIsLoggedInTrue;
  }

  //Wir geben einen StandardBtn aus und fügen _immer_ unsere beiden Variablen ein
  //Je nach Ausgang des if-/else-Blocks haben wir einen anderen Button als Ergebnis
  return <StandardBtn text={logInText} onClick={onClick} />;
}

export default LoginButton;
