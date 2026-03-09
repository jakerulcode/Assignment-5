let allIssues = [];

const loadIssues = async () => {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  allIssues = data.data;
  
  displayIssues(allIssues);
   document.getElementById("issue-count").innerText =
    allIssues.length + " Issues";
  
};
// id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"

const displayIssues = (datas) => {
  console.log(datas);
  const issuescontainer = document.getElementById("issues-container");
  issuescontainer.innerHTML = "";

  datas.forEach((data) => {
    const statusIcon =
      data.status === "open"
        ? "./assets/green.png.png"
        : "./assets/purple.png.png";
    
    
    
        let borderColor = "";

    if (data.status === "open") {
      borderColor = "border-t-4 border-green-500";
    } else {
      borderColor = "border-t-4 border-purple-500";
    }

    const issuCard = document.createElement("div");
    let buttonHtml = "";
    data.labels.forEach((item) => {
      console.log(item);

      let btnClass =
        item == "bug"
          ? "bg-red-300 rounded-full p-1 w-[56px] h-6"
          : item == "help wanted"
            ? "bg-yellow-400 rounded-full w-[112px] h-6  p-1"
            : "bg-green-300 rounded-sm p-1 w-[300px]";
      buttonHtml += `<button class="${btnClass}">${item}</button>`;
    });

    issuCard.innerHTML = `
      <div class="bg-base-100 h-full shadow p-6 space-y-3 ${borderColor}">
        <div class="flex justify-between items-center">
          <img src="${statusIcon}" alt="" />
          <span class="badge badge-error bg-red-100 text-red-500 border-none px-4 py-3">
            ${data.priority}
          </span>
        </div>

        <h2 class="text-[14px] font-semibold text-[#1F2937]">
          ${data.title}
        </h2>

        <p class="text-[#64748B] text-[12px] line-clamp-2">
          ${data.description}
        </p>

        <div class="flex gap-1 items-center 
        2">${buttonHtml}</div>
        <hr>

        <div class=" text-sm text-gray-500 text-left">
          <p>${data.author}</p>
          <p>${data.createdAt}</p>
        </div>
      </div>
    `;

    issuescontainer.appendChild(issuCard);
  });
};

const showOpenIssues = () => {
  const open = allIssues.filter((issue) => issue.status === "open");
  displayIssues(open);
  document.getElementById("issue-count").innerText =
    open.length + " Issues";
};

const showClosedIssues = () => {
  const closed = allIssues.filter((issue) => issue.status === "closed");
  displayIssues(closed);
   document.getElementById("issue-count").innerText =
    closed.length + " Issues";
};
const setActiveTab = (id) => {
  document.getElementById("all-btn").classList.remove("active-tab");
  document.getElementById("open-btn").classList.remove("active-tab");
  document.getElementById("closed-btn").classList.remove("active-tab");

  document.getElementById(id).classList.add("active-tab");
};

loadIssues();
