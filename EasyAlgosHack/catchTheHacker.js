// Catch the Hacker
// You don’t like studying for coding interviews alone, so before you go to bed you post a signup form online where people can add 
// their email if they want to practice interview questions together. When you wake up, you realize that other people dread studying 
// for interviews as much as you, and A LOT of devs have signed up.

// However, some prankster thought it would be funny to mess up your list, and they duplicated every email address multiple times. 
// But this person made a mistake - the algorithm they used to duplicate emails actually created more copies of their email address in 
// the list than anyone else. To get this hacker back, you want to find their email address in the list... using a computationally 
// efficient algorithm! 💪 🙌

// Write a function findHackerEmail that will return the email address of the hacker.

const emails = ['a@gmail.com', 'hey@skilled.dev', 'b@yahoo.com', 'hey@skilled.dev', 'hey@skilled.dev'];
const findHackerEmail = (emails) => {
    let maxCount = 0;
    let hackerEmail = '';
    let emailObj = {};


    //create a hash table that tracks the count of each email
    for(let email of emails){
        //if we haven't seen the email yet, add it to the table
        if(!emailObj[email]){
            emailObj[email] = 0;  
        }
        //increment the count for each email address
        emailObj[email]++
        console.log(emailObj)
      
    }
    //iterate over the emailObj to find the email address that appears the most
    for(let key in emailObj){
       let count = emailObj[key];
       if(count > maxCount){
           maxCount = count;
           hackerEmail = key;
       }
    }
    return hackerEmail
}


  console.log(findHackerEmail(emails))