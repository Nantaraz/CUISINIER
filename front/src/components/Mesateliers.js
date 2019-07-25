// import React from 'react';
// import axios from 'axios';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
// //import { Link } from 'react-router-dom'

// class Home extends React.Component {


//     constructor(props) {
//         super(props);
//         this.state = { profil: [] };

//     }
//     componentDidMount() {
//         axios.get('http://localhost:8080'+this.props.location.pathname)
//             .then(response => {
               
//                 this.setState({ profil: response.data });
            
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })

//     }

//     liste() {
//         return <div>
//             <div class="row">

//                 {
//                     (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
//                         return (
//                             <div class="col-md-2 carde">
//                                 <div class="card">
//                                     <div class="card-body">

//                                         <h4 class="card-title">{obj.Titre}</h4>
//                                         <img width="98%" height="90%" src={'http://localhost:8080/user/' + obj.photo_profil} alt="pdp" />
//                                         <p class="card-text"><li>Déscription: {obj.Description}</li></p>
//                                         <p class="card-text"><li>Date: {obj.Date}</li></p>
//                                         <p class="card-text"><li>Horaire du Debut: {obj.HoraireDebut}</li></p>
//                                         <p class="card-text"><li>Durée: {obj.Duree}</li></p>
//                                         <p class="card-text"><li>Place dispo: {obj.NombrePlacesDispo}</li></p>
//                                         <p class="card-text"><li>Place res: {obj.NombrePlacesRes}</li></p>
//                                         <p class="card-text"><li>Prix: {obj.Prix} Ar</li></p>
//                                         <center><button class="btn btn-success" onClick={() => {
//                                             //  axios.post("http://localhost:8080/particulier/"+prof._id)
//                                             confirmAlert({
//                                                 customUI: ({ onClose }) => {
//                                                     return (
//                                                         <center>
//                                                             <div className='custom-ui'>
//                                                                 <div >
//                                                                     <h4>Inscription pour l 'Atelier {obj.Titre}</h4>
//                                                                     <input name="Nom" onChange={this.handleChange}
//                                                                         value={this.state.value} placeholder="Entrer votre  nom" /><br></br>
//                                                                     <input name="Prenom" placeholder="Entrer votre  prenom" onChange={this.handleChange} value={this.state.value} /><br></br>
//                                                                     <input name="Telephone" placeholder="Entrer votre  Telephone" onChange={this.handleChange} value={this.state.value} /><br></br>
//                                                                     <input name="Email" placeholder="Entrer votre numero email" onChange={this.handleChange} value={this.state.value} /><br></br>

//                                                                     <button
//                                                                         onClick={() => {
//                                                                             axios.post("http://localhost:8080/particulier/" + obj._id, {
//                                                                                 Nom: this.state.Nom,
//                                                                                 Prenom: this.state.Prenom,
//                                                                                 Telephone: this.state.Telephone,
//                                                                                 Email: this.state.Email

//                                                                             }).then(res => {
//                                                                                 console.log(res.data);
//                                                                                 axios.get("http://localhost:8080/atelier").then(res => {

//                                                                                     this.setState({ profil: res.data })
//                                                                                     console.log(this.state.profil)

//                                                                                 })
//                                                                             })

//                                                                             onClose();
//                                                                         }}
//                                                                     >
//                                                                         confirmer
//                           </button>
//                                                                     <button onClick={onClose}>No</button>
//                                                                 </div>

//                                                             </div></center>
//                                                     );
//                                                 }
//                                             });
//                                         }} >S'inscrire</button></center>
//                                     </div>
//                                 </div>
//                             </div>)
//                     })) : ('')
//                 }
//             </div>
//             <footer class="page-footer font-small blue">
//                 <div class="footer-copyright text-center py-3">© 2018 Copyright:
//   <a href="https://mdbootstrap.com/education/bootstrap/"> RAZAFINDRAMIANDRA Herinantenaina Miandrasoa</a>
//                 </div>
//             </footer>
//         </div>
//     }
//     render() {
//         return (
//             <div >
//                 {this.liste()}
//             </div>
//         );
//     }
// }

// export default Home;


import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'



export default class Mesateliers extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            profil: [],
            Titre: '',
            Description:'',
            Date:'',
            HoraireDebut:'',
            Duree:'',
            NombrePlacesDispo:'',
            NombrePlacesRes:'',
            Prix:'',
            photo_profil:'',
            name:'',
            visibilite:false
         };

    }


    componentDidMount() {
        axios.get('http://localhost:8090'+this.props.location.pathname)
            .then(response => {
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    liste() {
        return <div>

<div>
            <div class="row">

                {
                    (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                        return (
                            <div class="col-md-4 carde">
                                <div class="card">
                                    <div class="card-body">

                                        <center><h4 class="card-title" id="titre">{obj.Titre}</h4></center>
                                        <img width="98%" height="90%" src={'http://localhost:8090/user/' + obj.photo_profil} alt="pdp" />
                                        <p class="card-text" id='milieu'><li>Déscription: {obj.Description}</li></p>
                                        <p class="card-text" id='milieu'><li>Date: {obj.Date}</li></p>
                                        <p class="card-text" id='milieu'><li>Horaire du Debut: {obj.HoraireDebut}</li></p>
                                        <p class="card-text" id='milieu'><li>Durée: {obj.Duree}</li></p>
                                        <p class="card-text" id='milieu'><li>Place dispo: {obj.NombrePlacesDispo}</li></p>
                                        <p class="card-text" id='milieu'><li>Place res: {obj.NombrePlacesRes}</li></p>
                                        <p class="card-text" id='milieu' onClick={()=>{
                                            console.log(obj._id);
                                            
                                        }}><li>Prix: {obj.Prix} Ar</li></p>
                                        <div className="row">
                                            <div className="col-md-6">
                                            <Link to={'/putAtelier/'+obj._id}><button className="btn bg-secondary" id="edit">Edit</button></Link>
                                            </div>
                                            <div className="col-md-6">
                                            <div>
                                            {obj.visibilite=true ?(<button className="btn bg-danger" id="activer" onClick={(e)=>{
                                                e.preventDefault()
                                                axios.get(" http://localhost:8090/ateliermasquer/"+obj._id).then(res=>{
                                                    axios.get('http://localhost:8090/profil/'+localStorage.getItem('id')).then(res=>{
                                                console.log(res.data)
                                                this.setState({profil:res.data})
                                                })
                                                    console.log(res.data)})
                                            
                                                
                                                }}>Desactiver</button>):(<button className="btn bg-danger" id="desactiver" onClick={(e)=>{
                                                e.preventDefault()
                                                    console.log(obj._id)
                                                   axios.get("http://localhost:8090/atelierafficher/"+obj._id).then(res=>{
                                                        axios.get('http://localhost:8090/profil/'+ localStorage.getItem('id')).then(res=>{
                                                console.log(res.data)
                                                this.setState({profil:res.data})
                                                    })
                                                    console.log(res.data)})
                                                
                                                    }}>Activer</button>)}
                                                    </div>
                                            </div> 
                                        </div>
                                       
                                                  
                                                             
                                    </div>
                                </div>
                            </div>)
                    })) : ('')
                }
            </div>
        </div>
            

        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}