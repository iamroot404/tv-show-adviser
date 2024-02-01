import { useEffect, useState} from 'react';
import { TVShowApi } from './api/tv-show';
import { TVShowDetail } from './components/TVShowDetail/TVShowDetail';
import s from './style.module.css';




export function App() {

  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars(){
    const popularTVShowList = await TVShowApi.fetchPopulars();
    if(popularTVShowList.length > 0){
      setCurrentTVShow(popularTVShowList[0]);
    }
    
  }

  useEffect(() =>{
   fetchPopulars();
   
  }, []);

  return (
    <div className={s.main_container}
    style={{background: currentTVShow ? `linear-gradient(rgba(0,0,0,0.55), rgba(0, 0, 0, 0.55)), url("https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19128463_v_h9_az.jpg") no-repeat center / cover`: 'black',}}>
        <div className={s.header}>
            <div className='row'>
                <div className='col-4'>
                    <div>LOGO</div>
                    <div>Subtitle</div>
                </div>
                <div className='col-md-12 col-lg-4'>
                      <input style={{width: "100%"}} type="text" />
                </div>
            </div>
        </div>
        <div className={s.tv_show_detail}>
          { currentTVShow && <TVShowDetail tvShow={currentTVShow}/>}
        </div>
        <div className={s.recommended_tv_shows}>Recommended TV Show</div>
    </div>
  )
}
