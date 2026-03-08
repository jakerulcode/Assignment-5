const loadIssues =async ()=>{
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    const data =await res.json()
    displayIssues(data.data)

}

const displayIssues = (issues)=>{

    const issuescontainer = document.getElementById('issues-container');
    issuescontainer.innerHTML = ''

    issues.forEach((issue) => {

        const issuCard = document.createElement('div');
        issuCard.innerHTML = `
            
        `
        
    });

}