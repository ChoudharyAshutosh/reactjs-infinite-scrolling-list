import './DataModel.css'
export default function DataModel({data,id}){
    //closing modal
    const closeDetails=()=>{
        document.getElementById('modal').style.display='none'
    }
    //stopping bubbling at the time of closing modal
    const stopBubbling=(event)=>{
        event.stopPropagation()
    }
    //rendering modal data
    const renderData=()=>{
        if(data === null) return
        let count=0
        return(
            data.map((item)=>{
                count++
                if(`${count+item.id}`===id){
                    return(
                        <div className={'modal-data-container'}>
                            <div className={'item-category'}>{item.name}
                                <button className={"close-button"} onClick={closeDetails}>X</button>
                            </div>
                            <div className={'modal-data'}>{renderSubMenu(item['menu-items'])}</div>
                        </div>

                    )
                }
                else return null
            })
        )
    }
    //rendering sub list in modal
    const renderSubMenu=(items)=>{
        console.log(items)
        return (
            items.map((item)=>(
                <div id={item.id} key={item.id} className={"item-container"}>
                    <div className={'item-name'}>{item.name}</div>
                    {renderSubItems(item['sub-items'])}
                </div>
            ))
        )
        }
    //rendering items in sublist
    const renderSubItems=(items)=>{
        console.log(items)
        return(
            items.map((item)=>(
                <div key={item.id} className={'subitem-detail-container'}>
                    <div>Item  : {item.name}</div>
                    <div>Price : {item.price}</div>
                    <div>Consumable : {item.consumable}</div>
                    <div>cuisine name : {item.cuisine_name}</div>
                    <div>Category : {item.category_name}</div>
                    {renderDiscount(item.discount)}
                </div>
            ))
        )
    }
    //rendering discount if there is discount
    const renderDiscount=(discount)=>{
        if(discount.amount==="0.00") return
        return(
            <div>
                <div>Discount</div>
                <div className={'discount-details'}>Type : {discount.name}</div>
                <div className={'discount-details'}>Amount : {discount.amount}</div>
            </div>
        )
    }
    return(
        <div className={'modal-container'} id="modal" onClick={closeDetails}>
            <div className={'modal'} onClick={stopBubbling}>
                {renderData()}
            </div>
        </div>
    )
}