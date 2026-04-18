import { createSignal } from "solid-js"
import { createStore } from "solid-js/store"

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

    function CreateFolder(params) {
        console.log("HOST",params);
        
        return (
            <>
                <div class="nigger flex justify-center" name="">
                    <div class="flex">
                    {
                        Object.keys(params[0]).map((key) => {
                            console.log("key",key);
                            let val = params[0][key]
                            console.log("value",val);
                            const isPlainObject = val !== null && typeof val === 'object' && !Array.isArray(val) ? "object" : "array";
                            if (isPlainObject == "array") {
                                return (
                                    <div class="folder flex flex-col">
                                        <div class="p-[1rem] rounded-xl flex border-2 w-fit">
                                            {/* <div class="icon"></div> */}
                                            <p>
                                                {key}
                                            </p>
                                        </div>
                                        {CreateFolder(val)}
                                    </div>
                                )

                            } else {
                                return (
                                    <div class="p-[1rem] rounded-xl flex w-fit border-2 h-fit">
                                        {/* <div class="icon"></div> */}
                                        <p>
                                            {val.name}
                                        </p>
                                    </div>
                                )
                            }
                        })
                    }
                    </div>

                </div>
            </>
        )

    }

    return (
        <div class="bg-blue-900 h-screen w-screen justify-center">
            {
                CreateFolder(host)
            }

        </div>
    )
}
