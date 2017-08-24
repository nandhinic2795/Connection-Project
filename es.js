
function checkLetter(obj){
	
                chr = obj.value;
                obj.value = '';
                for(var i=0; i < secWord.length; i++){
                    if(secWord.charAt(i) == chr.toLowerCase()){
                        oSecLetters[i].style.backgroundColor = 'cyan';
                        oSecLetters[i].innerHTML = chr;
                    }
                }
            }
            window.onload=function(){
                secWord = 'william shakespeare';
                var oSecretWordContainer = document.getElementById('secretWordContainer');
                for(var i=0; i < secWord.length; i++){
                    var newDiv = document.createElement('div');
                    newDiv.className = 'secLetters';
                    oSecretWordContainer.appendChild(newDiv);
                }
                oSecLetters = oSecretWordContainer.getElementsByTagName('div');
                document.getElementById('txtLetter').onkeyup = function(){
                	
                
                    checkLetter(this);
                }
                document.getElementById('txtLetter').focus();
                document.getElementById('btnReset').onclick=function()
                {
                    for(i=0; i < secWord.length; i++){
                        oSecLetters[i].style.backgroundColor = 'white';
                        oSecLetters[i].innerHTML = '';
                    }
                    document.getElementById('txtLetter').focus();
                }
            }
