let movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ];
   
   let currentMovie = getRandomMovie();
   
   function getRandomMovie() {
     let randomIndex = Math.floor(Math.random() * movies.length);
     return movies[randomIndex];
   }
   
   function submitGuess() {
     let userGuess = document.querySelector('#guess-input').value.toLowerCase();
     let output = document.querySelector('#hint');
     
     if (userGuess == currentMovie.title.toLowerCase()) {
       output.textContent = "Congratulations! You've guessed the right movie.";
       output.className = 'alert alert-success';
       currentMovie = getRandomMovie(); 
       displayMovie();
     } else {
       output.textContent = "That's not right! Try again.";
       output.className = 'alert alert-danger';
     }
     
     document.querySelector('#guess-input').value = '';
   }
   
   function displayMovie() {
     document.querySelector('#explanation').textContent = currentMovie.explanation;
   }
   
   function revealHint() {
     let hint = document.querySelector('#hint');
     hint.textContent = 'Hint: ' + currentMovie.hint;
     hint.className = 'alert alert-info';
   }
   
   displayMovie();
   