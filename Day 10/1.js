let arr=[
    {
        name: "Darshit Jotaniya"
    },
    {
        num: 12
    },
    {
        age: 19
    },
    {
        city: "rajkot"
    },
    {
        food: "Vegetable"
    },
    {
        hobby: "traveling"
    },
    {
        langauge: "english"
    },
    {
        gender: "male"
    },
    {
        movie: "Bad Boys"
    },
    {
        std: "B.E. Running"
    }
]
for(let i=0; i<arr.length; i++)
{
    let x = Object.values(arr[i])
    console.log(x[0])
}