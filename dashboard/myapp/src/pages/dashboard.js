import '../assets/style.css'

const Dash =()=>{
    return(
        <>
        <div className="main vh-100 vw-100 flex flex-col">
            <div className="appbar hv-5 wv-100 theme-bg item-center flex justify-end">
                <div className='wv-90 flex item-center justify-end '>
                    appbar
                </div>
            </div>
            <div className="container">
                <div className="leftbar">
                    leftbar
                </div>
                <div className="content">
                    content
                </div>
            </div>
        </div>
        </>
    )
}

export default Dash;