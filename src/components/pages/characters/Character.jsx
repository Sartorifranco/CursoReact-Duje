import { useEffect, useState } from "react";
import axios from "axios";
import Typography from '@mui/material/Typography';
import CardCharacter from "../../common/cardCharacter/CardCharacter";


const Character = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // fetch("https://rickandmortyapi.com/api/character")
    // .then(res => res.json())
    // .then(res => setCharacter(res.results))

    axios
      .get("https://rickandmortyapi.com/api/character")

      .then((res) => setCharacter(res.data.results));
  }, []);
  console.log(character);
  return (
    <>
      <Typography variant='h2' color='primary' align='center'>Personajes</Typography>
      <div style={{
                width:'100%',
                display: 'flex',
                flexWrap: 'wrap',
                justiContent: 'center',
                alignItems: 'center',
                gap: '20px',
                padding: '20px'
      }}> 
      {
        character.map((e)=>{
            return(
               <CardCharacter key={e.id} e={e} />
            )
        })
      }
      </div>
    </>
  );
};

export default Character;
