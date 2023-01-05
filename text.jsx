import {React,useState,useEffect} from "react";

function Text(){
    const [details,setDetails]=useState([]);
    const [numb,setNumb]=useState(0)
    const [name,setName]=useState("")
    const [roll,setRoll]=useState("")
    const [checkin,setCheckin]=useState("")
    const [checkout,setCheckout]=useState("")
    const handleName = (event)=>{
        setName(event.target.value)
    }
    const handleRoll = (event)=>{
        setRoll(event.target.value)
    }
    const handleCheckin = (event)=>{
        setCheckin(event.target.value)
    }
    const handleCheckout = (event)=>{
        setCheckout(event.target.value)
    }
    useEffect(() => {
        setNumb(details.length); // This will always use latest value of count
    }, [details.length]);
    const handleClick=()=>{
        const struct={
            name:name,
            roll:roll,
            checkin:checkin,
            checkout:checkout
        }
        setDetails(details.concat(struct))
        
        const [h1,m1]=checkin.split(":")
        const t1=parseInt(h1)*60*60+parseInt(m1)*60;
        const [h2,m2]=checkout.split(":")
        const t2=parseInt(h2)*60*60+parseInt(m2)*60;
        const diff=t2-t1
        const delStud=(roll)=>{
            setDetails(details.filter(item=>item.roll!==roll))
        }
        setTimeout(delStud,diff*1000,roll)
        setName("");
        setRoll("");
        setCheckin("");
        setCheckout("");
    }
    return(
        <>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Student Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" value={name} onChange={handleName} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Roll. No</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control"  value={roll} onChange={handleRoll}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Check-in Time</label>
                <div className="col-sm-10">
                    <input type="time" className="form-control"  value={checkin} onChange={handleCheckin}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Check-out Time</label>
                <div className="col-sm-10">
                    <input type="time" className="form-control" value={checkout} onChange={handleCheckout}/>
                </div>
            </div>
            <div className="text-center">
                <button type="button" className="btn btn-primary" onClick={handleClick}>Primary</button>
            </div>
            <div className="container">
                <h1>Student present {numb}</h1>
            </div>
        </>
        );
}

export default Text;