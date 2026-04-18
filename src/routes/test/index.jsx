import { createSignal } from "solid-js"
import { createStore } from "solid-js/store"
import "../../app.css"
import { A } from "@solidjs/router";
// interface tileType{
//    name : string ;  
//    type : "file" | "folder" ;
//    path : string ;

// }

// interface treetype {

// }




export default function Index() {
    let host = [
        {
            "file": {
                name: "asd",
                title: "whatever"
            },
            "folder": [
                {
                    "file1": {
                        name: "asd",
                        title: "whatever"
                    },
                    "file2": {
                        name: "asd",
                        title: "whatever"
                    },
                    "folder": [
                        {
                            "file1": {
                                name: "asd",
                                title: "whatever"
                            },
                            "file2": {
                                name: "asd",
                                title: "whatever"
                            },
                        }
                    ]
                }
            ]
        }
    ]


    //     let [layer, setLayer] = createSignal([])
    //     let remainingLayer = host

    //     while (Object.keys(remainingLayer).length > 0) {
    //     let cacheLayer = []
    //     // let cacheLayer : tileType[] = []    
    //     for (const key in remainingLayer) {
    //         let val = remainingLayer[key]
    //         const isPlainObject = val !== null && typeof val === 'object' && !Array.isArray(val) ? "file" : "folder";
    //         cacheLayer.push({
    //             name: key,
    //             type: isPlainObject
    //         })
    //     }

    //     setLayer(v => [...v,cacheLayer])
    //     remainingLayer = Object.values(remainingLayer)
    //     console.log("asd");

    // }
const routes = import.meta.glob([
  '/src/routes/**/*',
  '!**/*.html',
  '!**/*.css',
  '!**/*.png',
  '!**/*.jsx',
  '!**/*.js',
  '!**/*.tsx',
]);

console.log(Object.keys(routes));
let realHost = {}
function groupRoutes(dir) {
    let group = {}   
    Object.keys(dir).map((path)=>{
       let file = path.replace("/src/routes/","")
        if(path.length < 1) return
       let nextRouteIndex = path.indexOf("/")
       if(nextRouteIndex == 0){ 
        file.slice(0,nextRouteIndex)
        // HOST.SLICES DIR CONTAIN ARRAY?
        // CREATE A FUNCTION TAKES A DIR PREVIOUS NESTED PATH AND A NEW DIR CHECKS IT IF DIDNT FOUND A FILE DOES IT TILL IT FIND
        // IF YES USE IT and put [0] and then

       }else{
        realHost[file] = {
            name : "nigger" ,
            href : file ,
            title : "niggerlicious"
        }
        }

    })
}

function addValue(originalDir,nestedDir) {
    path
}
    

    function CreateFolder(params) {
        
        return (
            <>
                <div class="nigger flex justify-center gap-[1rem]" name="">
                    {
                        Object.keys(params[0]).map((key) => {
                            let val = params[0][key]
                            const isPlainObject = val !== null && typeof val === 'object' && !Array.isArray(val) ? "object" : "array";
                            if (isPlainObject == "array") {
                                return (
                                    <div class="folder flex flex-col gap-[0.4rem]">
                                        <div class="p-[1rem] rounded-xl flex border-2 border-gray-600 justify-center">
                                            {/* <div class="icon"></div> */}
                                            <p class="">
                                                {key}
                                            </p>
                                        </div>
                                        {CreateFolder(val)}
                                    </div>
                                )

                            } else {
                                return (
                                    <div class="p-[1rem] rounded-xl flex w-fit border-2 border-gray-600 h-fit">
                                        {/* <div class="icon"></div> */}
                                        <A href={`/${val.name}`}>
                                            {val.name}
                                        </A>
                                    </div>
                                )
                            }
                        })
                    }
                    </div>

            </>
        )

    }

    return (
        <div class="bg-gray-900 h-screen w-screen justify-center">
            {
                CreateFolder(host)
            }

        </div>
    )
}
