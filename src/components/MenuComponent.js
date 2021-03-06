import React,{Component} from 'react'
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MenuComponent.css'
import Detail from './DishDetailComponent';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrls'
function RenderMenuItem({dish }){

    return(

                        <Card >         {/* onClick={()=>onClick(dish.id)} */}
                            <Link to={`/menu/${dish.id}`}>
                             <CardImg width='100%' src={baseUrl + dish.image} alt={dish.name}/>
                                <CardImgOverlay>
                                    <CardTitle>{dish.name}</CardTitle>
                                </CardImgOverlay> 
                            </Link>
                        </Card>

    )

}

    // constructor(props){
    //     super(props);
       
    //     // this.state={
    //     //     selectedDish:null
    //     // }
    // }


    // onDishSelect(dish){
    //     this.setState({selectedDish:dish})
    // }

    
const Menu=  (props)=> {

        const menu = props.dishes.dishes.map((dish)=>
        {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                   
                        <RenderMenuItem dish={dish} />
                        {/* onClick={props.onClick} */}
                    
                </div>
            );
        });

        

        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else{

        return (

            
            <div className='container'>
                <div classNmae='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className='col-12'>
                    <h3>Menu</h3>
                </div>
                <div className='row'>
                    
                        {menu}
                    
                </div>
                
                {/* <Detail dish={this.state.selectedDish}/> */}
            </div>


                
        )}


        
        
    }











export default Menu;