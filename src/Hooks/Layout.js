import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { load_user , checkAuthenticated} from '../Actions/Auth';
import Navbar from '../Components/Navbar'
import Footer from '../Containers/Footer'



function Layout(props) {
    
    useEffect(() => {
        props.checkAuthenticated();
        props.load_user();
    },);
    
    return (
        <div>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default connect(null,{checkAuthenticated,load_user})(Layout);