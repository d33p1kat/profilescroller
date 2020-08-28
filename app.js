const data = [
    {
        name: "Jhon Doe",
        age: 32,
        gender: "male",
        lookingfor: "female",
        location: "Boston Ma",
        image: "https://randomuser.me/api/portraits/men/82.jpg"
    },
    {
        name: "Jhen Smith",
        age: 26,
        gender: "female",
        lookingfor: "male",
        location: "Mayami Florida",
        image: "https://randomuser.me/api/portraits/women/82.jpg"
    },
    {
        name: "William",
        age: 38,
        gender: "male",
        lookingfor: "female",
        location: "lynn Ms",
        image: "https://randomuser.me/api/portraits/men/83.jpg"
    },
    {
        name: "Jelly",
        age: 25,
        gender: "female",
        lookingfor: "male",
        location: "lynn",
        image: "https://randomuser.me/api/portraits/women/83.jpg"
    }

];

let personinfo = profileIterator(data);

// EVENT LISTENERS
document.getElementById("next").addEventListener("click", displaydata);
function displaydata(){
   let val = personinfo.next().value;
   if(val !== undefined){
        document.getElementById("profiledisplay").innerHTML = 
        `<ul class="list-group">
            <li class="list-group-item">Name:  ${val.name}</li>
            <li class="list-group-item">Gender:  ${val.gender}</li>
            <li class="list-group-item">Age:  ${val.age}</li>
            <li class="list-group-item">Location:  ${val.location}</li>
            <li class="list-group-item">LookingFor: ${val.lookingfor}</li>
        </ul>`
        document.getElementById("imagedisplay").innerHTML = `<img src="${val.image}">`;
   }else{
       window.location.reload();
   }
}

// ITERATOR FUNCTION
function profileIterator(profiles){
    let nextIndex = 0;
    return{
        next: function(){
           return  nextIndex < profiles.length ? {value:profiles[nextIndex++], done: false} : {done : true}
        }
    }
}