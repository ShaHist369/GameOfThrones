import React, {useState} from 'react';
import Menu from "../../common/header/menu";
import Front from "../../common/front";
import housesImg from "../../assets/images/houses.png";
import Card from "../../common/card";
import {useDispatch, useSelector} from "react-redux";
import { asyncGetMore} from "../../redux/actions/actions";
import Preloader from "../../common/preloader";
export type HousesType = {
        url:string
        name: string
        region: string
        coatOfArms: string
        words: string
        titles: Array<string>
        seats: Array<string>
        currentLord: string
        heir: string
        overlord: string
        founded: string
        founder: string
        diedOut: string
        ancestralWeapons: Array<string>
        cadetBranches: Array<string>
        swornMembers: Array<string>
}
function Houses() {
    const houses: Array<HousesType> = useSelector((store:any) => store.houses)
    const [loading, setLoading] = useState(false);
    const [nameHouse, setNameHouse] = useState("");
    const dispatch = useDispatch()
    const getMore = () =>{
        setLoading(true)
       let length = houses.length
       let page = Math.ceil(length/10 + 1)
        let getMoreAction = asyncGetMore(page, 'houses', setLoading)
        dispatch(getMoreAction)
    }
    let housesFilteredName = houses
    if(nameHouse){
        housesFilteredName = houses.filter((house:HousesType)=> house.name.includes(nameHouse))
    }
  return (
    <>
        <Menu/>
        <div style={{
            display:'flex',
            justifyContent: 'space-around',
            marginTop: '100px',
            position: "relative",
            height: '60vh',
            zIndex: 2
        }}>
            <Front img={housesImg} title={'houses'} height={'110px'} position={'relative'}/>
        </div>

       <div style={{
                        display:'grid',
                        justifyContent:'center',
                        marginBottom: '200px'
            }}>
                <div style={{
                        display:'grid',
                        justifyContent:'center',
                        marginTop:'200px',
                        border: '1px solid white',
                        textAlign: 'center',
                        width: '500px'
                    }}>
                    <h1 style={{
                        display:'grid',
                        justifyContent:'center',
                    }}>filter</h1>
                    <h2>house name:</h2>
                    <input type="text" style={{marginBottom:'30px'}} onInput={(e:any)=>{setNameHouse(e.target.value)}}/>
                </div>
        </div>
        <div style={{
            display:'grid',
            justifyContent:'center',
        }}
        >
            {housesFilteredName.map((house: any) => <Card
                key={house.url}
                data={house}/>)
            }

            {loading ? <Preloader/> : <button
                onClick={getMore}
                style={{background: 'white', border: 'none', fontSize: '20px'}}
            >show more houses
            </button>}

        </div>


    </>
  );
}

export default Houses;