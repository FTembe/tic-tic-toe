let current_symbol = 'X',
		    board = ['', '', '', '', '', '', '', '', ''],
		    winner=false,
		    info =document.querySelector('p'),
			remaining_moves=board.length;
		let win_patterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		function makePlay(position, symbol) {
			if(!winner){

				board[position] = (symbol);
				let winner = checkWinner(symbol);
				remaining_moves=remaining_moves-1;
				draw()
			}
			
		}

		function draw(){
			
			if(remaining_moves =>0){
				board.forEach((value, i)=>{
					document.querySelectorAll('.square')[i].innerText=value
				})
			}
			else{
				document.querySelector('p').innerText= `Jogo Empatado`;
			}
			
		}

		function checkWinner(player_symbol) {
			for (i in win_patterns) {

				if (
					board[win_patterns[i][0]] == player_symbol &&
					board[win_patterns[i][1]] == player_symbol &&
					board[win_patterns[i][2]] == player_symbol
				) {
					winnerSequenceHighlight(i)
					document.querySelector('p').innerHTML = `O vencedor e <span>${player_symbol} </span>`
					return winner=true;

				} else {

				}
			}
		}
		function winnerSequenceHighlight(position) {
			document.querySelectorAll('.square')[win_patterns[position][0]].classList.add('winner')
			document.querySelectorAll('.square')[win_patterns[position][1]].classList.add('winner')
			document.querySelectorAll('.square')[win_patterns[position][2]].classList.add('winner')

		}
		function reset(){
			info.innerHTML='&nbsp';
			if(remaining_moves<=0 ){
				board.forEach((value, i)=>{
					board[i]='';
					document.querySelectorAll('.square')[i].innerText='';
				})
			}else{
					
					info.innerHTML=`
					<span class="warning">O jogo sera reiniciado forçar ?</span> 

					<a class="force-reset" onclick="(forceReset())" >Sim</a>
					`;
			}
			
		}
		function forceReset() {
			info.innerHTML='&nbsp';
			board.forEach((value, i)=>{
				board[i]='';
				document.querySelectorAll('.square')[i].innerText='';
			})
		}
		document.querySelectorAll('.square').forEach((box, i) => {
			box.addEventListener('click', () => {
				makePlay(i, current_symbol)
				current_symbol === 'X' ? current_symbol = 'O' : current_symbol = 'X';


			})
		})