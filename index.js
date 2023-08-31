function playSound(Number, Name)
{
  const audio = new Audio('Sounds/note' + Number + '.wav');
  audio.play();
  for (var i = 1; i<=7; i++)
  {
    document.getElementById("Sound" + i).innerHTML="";
  }
  let SoundSpan = document.createElement('span');
  SoundSpan.textContent = Name + "\t";
  document.getElementById("Sound" + Number).appendChild(SoundSpan);
  MusicText(Name);
}

function MusicText(Name)
{
  let TextSpan = document.createElement('span');
  TextSpan.textContent = Name + "\t";
  document.getElementById("Music").appendChild(TextSpan);
}

function ResetMusic()
{
  document.getElementById("Music").innerHTML="";
  for (var i = 1; i<=7; i++)
  {
    document.getElementById("Sound" + i).innerHTML="";
  }
}