import React, {useState} from 'react'
import DataModel from '../datamodel/DataModel'
import './List.css'
export default function List(props){
    const [selectedId,setSelectedId]=useState(null)
    //for making list loading infinite
    const scrollCheck=(event)=>{
        console.log(event.target.scrollTop)
        if(event.target.scrollTop+100>event.target.offsetHeight)
            props.fetchDataAgain()      
    }
    //displaying list
    const renderList=()=>{
       if(props.list===null) return
        let count=0
        console.log(count)
        return(
            props.list.map(item=>{
               count++
                return(
                    <div className="list-item" key={`${count+item.id}`} id={`${count+item.id}`} onClick={showDetails.bind(this, `${count+item.id}`)}>
                        <div>{item.name}</div>
                        <div className={'menu-items'}>
                            {renderItems(item['menu-items'])}
                        </div>
                    </div>
                    )
              })
        )
    }
    //displaying sublist in list
    const renderItems=(sublist)=>{
        return(
            sublist.map(item=>(
                <div key={item.id}>{item.name}</div>
            ))
        )
    }
    //opening modal
    const showDetails=(id)=>{
        setSelectedId(id)
        document.getElementById('modal').style.display='flex'
        if(document.getElementsByClassName('modal-data')[0])
        document.getElementsByClassName('modal-data')[0].scrollTop=0
    }
    //going back to home
    const goBack=()=>{
        props.history.push("/")
    }
    return(
        <div className={"list-container"}>
            <div className={'list-header'}>
                <button className="back" onClick={goBack}>&#8249;</button>
                {props.header}
            </div>
            <div className="list" onScroll={scrollCheck}>
                {renderList()}
            </div>
            <DataModel data={props.list} id={selectedId}/>
        </div>
    )
}
