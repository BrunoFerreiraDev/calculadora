export default Example = () => {
    const [exampleState, setExampleState] = useState(
        {
            masterField: {
                fieldOne: "a",
                fieldTwo: {
                    fieldTwoOne: "b",
                    fieldTwoTwo: "c"
                }
            }
        })
}


setExampleState({
    ...exampleState, masterField2: {
        fieldOne: "c",
        fieldTwo: {
            fieldTwoOne: "d",
            fieldTwoTwo: "e"
        }
    }
})

//Exemplo 2
const [infoData, setInfoData] = useState({
    major: {
        name: "John Doe",
        age: "24",
        sex: "M",
    },

    minor: {
        id: 4,
        collegeRegion: "south",

    }

});
// Atualizar um registro específico exigirá fazer um recall para o estado anterior prevState

// Aqui:

setInfoData((prevState) => ({
    ...prevState,
    major: {
        ...prevState.major,
        name: "Tan Long",
    }
}));
// possivelmente

setInfoData((prevState) => ({
    ...prevState,
    major: {
        ...prevState.major,
        name: "Tan Long",
    },
    minor: {
        ...prevState.minor,
        collegeRegion: "northEast"

    }
}));