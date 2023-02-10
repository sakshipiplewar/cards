var cl = console.log;
// var imagesArray = [
//     "https://source.unsplash.com/random/?nature",
//     "https://source.unsplash.com/random/?city",
//     "https://source.unsplash.com/random/?people",
//     "https://source.unsplash.com/random/?fashion&beauty",
//     "https://source.unsplash.com/random/?food&drink",
//     "https://source.unsplash.com/random/?athletics",
//     "https://source.unsplash.com/random/?science",
//     "https://source.unsplash.com/random/?robot",
//     "https://source.unsplash.com/random/?javascript",
//     "https://source.unsplash.com/random/?html",
//     "https://source.unsplash.com/random/?angular",
//     "https://source.unsplash.com/random/?cricket",
//     "https://source.unsplash.com/random/?pastel",
//     "https://source.unsplash.com/random/?mockups",
//     "https://source.unsplash.com/random/?interior",
//     "https://source.unsplash.com/random/?luxury",
//     "https://source.unsplash.com/random/?lifestyle",
//     "https://source.unsplash.com/random/?yoga",
//     "https://source.unsplash.com/random/?spring",
//     "https://source.unsplash.com/random/?health",
//     "https://source.unsplash.com/random/?gym",
//     "https://source.unsplash.com/random/?holi",
//     "https://source.unsplash.com/random/?blosom",
//     "https://source.unsplash.com/random/?film",
//     "https://source.unsplash.com/random/?experimental",
//     "https://source.unsplash.com/random/?paris",
//     "https://source.unsplash.com/random/?night lights",
//     "https://source.unsplash.com/random/?wildlife",
//     "https://source.unsplash.com/random/?gaming",
//     "https://source.unsplash.com/random/?winter",
//     "https://source.unsplash.com/random/?pastel",
//     "https://source.unsplash.com/random/?mockups",
//     "https://source.unsplash.com/random/?interior",
//     "https://source.unsplash.com/random/?luxury",
//     "https://source.unsplash.com/random/?lifestyle",
//     "https://source.unsplash.com/random/?yoga",
//     "https://source.unsplash.com/random/?spring",
//     "https://source.unsplash.com/random/?health",
//     "https://source.unsplash.com/random/?gym",
//     "https://source.unsplash.com/random/?holi",
//     "https://source.unsplash.com/random/?blosom",
//     "https://source.unsplash.com/random/?film",
//     "https://source.unsplash.com/random/?experimental",
//     "https://source.unsplash.com/random/?paris",
//     "https://source.unsplash.com/random/?night lights",
//     "https://source.unsplash.com/random/?wildlife",
//     "https://source.unsplash.com/random/?gaming",
//     "https://source.unsplash.com/random/?winter",
// ]
// var imgcontainer = document.getElementById("imgcontainer");
// var result = "";
// for (var i = 0; i < imagesArray.length; i++) {
//     result += `
//            <div class="col-4 mb-4">
//                 <div class="card mythumbnail">
//                     <div class="card-body">

//                         <img src="${imagesArray[i]}" class='w-100'>

//                     </div>

//                 </div>
//             </div>
//       `
// }
// imgcontainer.innerHTML = result;


var imagesArray = [
    "https://source.unsplash.com/random/?nature",
    "https://source.unsplash.com/random/?city",
    "https://source.unsplash.com/random/?people",
    "https://source.unsplash.com/random/?fashion&beauty",
    "https://source.unsplash.com/random/?food&drink",
    "https://source.unsplash.com/random/?athletics",
    "https://source.unsplash.com/random/?science",
    "https://source.unsplash.com/random/?robot",
    "https://source.unsplash.com/random/?javascript",
    "https://source.unsplash.com/random/?html",
    "https://source.unsplash.com/random/?angular",
    "https://source.unsplash.com/random/?cricket",
    "https://source.unsplash.com/random/?pastel",
    "https://source.unsplash.com/random/?mockups",
    "https://source.unsplash.com/random/?interior",
    "https://source.unsplash.com/random/?luxury",
    "https://source.unsplash.com/random/?lifestyle",
    "https://source.unsplash.com/random/?yoga",
    "https://source.unsplash.com/random/?spring",
    "https://source.unsplash.com/random/?health",
    "https://source.unsplash.com/random/?gym",
    "https://source.unsplash.com/random/?holi",
    "https://source.unsplash.com/random/?blosom",
    "https://source.unsplash.com/random/?film",
    "https://source.unsplash.com/random/?experimental",
    "https://source.unsplash.com/random/?paris",
    "https://source.unsplash.com/random/?night lights",
    "https://source.unsplash.com/random/?wildlife",
    "https://source.unsplash.com/random/?gaming",
    "https://source.unsplash.com/random/?winter",
    "https://source.unsplash.com/random/?pastel",
    "https://source.unsplash.com/random/?mockups",
    "https://source.unsplash.com/random/?interior",
    "https://source.unsplash.com/random/?luxury",
    "https://source.unsplash.com/random/?lifestyle",
    "https://source.unsplash.com/random/?yoga",
    "https://source.unsplash.com/random/?spring",
    "https://source.unsplash.com/random/?health",
    "https://source.unsplash.com/random/?gym",
    "https://source.unsplash.com/random/?holi",
    "https://source.unsplash.com/random/?blosom",
    "https://source.unsplash.com/random/?film",
    "https://source.unsplash.com/random/?experimental",
    "https://source.unsplash.com/random/?paris",
    "https://source.unsplash.com/random/?night lights",
    "https://source.unsplash.com/random/?wildlife",
    "https://source.unsplash.com/random/?gaming",
    "https://source.unsplash.com/random/?winter",
]
var imgcontainer = document.getElementById("imgcontainer");
var result = ``;
imagesArray.forEach(function (images) {
    cl(images);
    result += `  <div class="col-4 mb-4">
                    <div class=" card mythumbnail">
                        <div class="card-body">
                             <img src="${images}">
                        </div>
                    </div>
              </div>
         `
})
imgcontainer.innerHTML = result;
