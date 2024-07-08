let grade = document.getElementById("grade").value

switch (grade) 
{
  case "A":
    console.log("Excellent work!");
    break;
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("You can do better.");
    break;
  case "D":
    console.log("You need to work harder.");
    break;
  case "F":
    console.log("Failed. Try again.");
    break;
  default:
    console.log("Invalid grade.");
}
