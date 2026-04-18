import { createSignal } from "solid-js"
import { createStore } from "solid-js/store"

let routes = {
  "folder1": {
    children: [
      "hello", "bye", "asd"
    ]
  },
  children: ["1", "2", "3"],
  "folder2": {
    children: [
      "hello", "bye", "asd"
    ]
  },
}
export default function route() {
  let [isNested, setIsNested] = createSignal(true)
  let [currentDept, setCurrentDept] = createSignal(0)
  let [queList, setQueList] = createSignal([])
  let [sCopy, setSCopy] = createSignal(routes)
  let [tree, setTree] = createStore([])

  setTree((v) => {
    return [...v, [...Object.keys(routes)]]
  })

  console.log("cop",sCopy());
  

  while (isNested()) {
    // GOINGES DEEP INSIDE 💦💦💦
    setSCopy((v) => {
      let keys = Object.keys(v)
      let obj = {}

      keys.map((key) => {
        obj[key] = v[key]
         console.log("what",v[key]);
         
        if (Array.isArray(v[key])) {
          setIsNested(true)
          setCurrentDept(1)

        } else {
          setIsNested(false)
        }

      })
      console.log("asdas");

      setTree(v => {
        return [...v, keys]
      })

      return obj
    })

  }

  // console.log("TREE", tree());



  return (
    <div class="w-screen h-screen bg-amber-500">

      <div class="flex gap-[2rem]">
        {

          Object.keys(routes).map((routeName) => {

            return (
              <div class="main route p-[1rem] rounded-xl bg-gray-700">
                {routeName}
              </div>
            )
          })
        }
      </div>

    </div>
  )
}