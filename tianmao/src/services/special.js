import newFly from "@/utils/require.js"

export function getLists(payload){
  return  newFly.post("/api/open/sepcial/query/1.0.0",payload);
}