fetch("https://api.covidtracking.com/v1/states/info.json")
        .then((response) => {
            console.log(response);

            return response.json()
        })
        .then((data) => {
            console.log(data);

            data.forEach((el) => {

                let div = document.createElement("div");
                div.className = "main"
                
                let name = document.createElement("h2");
                name.className = "name"
                name.innerText = "Name : "+el.name;

                let state = document.createElement("h3");
                state.className = "state";
                state.innerText = "State : "+el.state;

                let twitter = document.createElement("h3");
                twitter.className = "twitter";
                twitter.innerText = "Twitter : "+el.twitter;

                let text = document.createElement("h3");
                text.className = "text"
                text.innerText = "Note : "

                let note = document.createElement("div");
                note.className = "note";
                note.innerText = el.notes;
                
                let fips = document.createElement("h3");
                fips.className = "fips";
                fips.innerText = "Fips : " + el.fips;
                
                let pui = document.createElement("h3");
                pui.className = "pui";
                pui.innerText = "PUI : " + el.pui;

                let pum = document.createElement("h3");
                pum.className = "pum";
                pum.innerText = "PUM : " + el.pum; 
                
                let totalTestResultsField = document.createElement("h3");
                totalTestResultsField.className = "totalTestResultsField";
                totalTestResultsField.innerText = "Result : " + el.totalTestResultsField;

                div.append(name,state,twitter,text,note,fips,pui,pum,totalTestResultsField);
                document.body.append(div);
        
            });
        });
