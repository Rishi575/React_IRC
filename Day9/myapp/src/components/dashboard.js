import '../assets/css/core.css'

const Dash =()=>{
    return(
        <>
        <div className="main hv-100 wv-100 flex flex-col">
            <div className="appbar hv-5 wv-100 theme-bg item-center flex justify-end">
                <div className='wv-90 flex item-center justify-end '>
                    appbar
                </div>
            </div>
            <div className="container theme-bg wv-20 hv-100 m-1 flex ">
                <div className="leftbar justify-center flex">
                    leftbar
                </div>
                <div className="content flex justify-center hv-100 wv-80 theme-bg item-center">
                    content
                </div>
            </div>
        </div>
        </>
    )
}

export default Dash;