const obj = {
    "_id": {
        "$oid": "63b64dc9e3b230ebb60a495d"
    },
    "_key": "topic:2085",
    "category": "Course",
    "cid": {
        "$numberDouble": "NaN"
    },
    "commitment": "4 hours",
    "commitment_type": "custom",
    "deadline": "",
    "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
    "faqs": [],
    "globalTags": [],
    "isActive": true,
    "lastposttime": 0,
    "learning_outcomes": [
        "Bare minimum knowledge of project management",
        "4SA Concept",
        "Would be able to handle any project efficiently"
    ],
    "mainPid": 0,
    "postcount": 0,
    "pre_requisites": [
        "An open mind to learn any concept",
        "Thought of Unlearning and Relearning "
    ],
    "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
    "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
    "slug": "2085/technical-project-management",
    "status": "published",
    "tasks": [
        {
            "task_id": 18882,
            "task_title": "Explore the world of management",
            "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
            "status": "notworkyet",
            "assets": [
                {
                    "asset_id": 18883,
                    "asset_title": "Technical Project Management",
                    "asset_description": "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
                    "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
                    "asset_type": "display_asset",
                    "asset_content_type": "video"
                },
                {
                    "asset_id": 18884,
                    "asset_title": "Threadbuild",
                    "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "threadbuilder"
                },
                {
                    "asset_id": 18885,
                    "asset_title": "Structure you pointers ",
                    "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "article"
                },
                {
                    "asset_id": 18886,
                    "asset_title": "4SA Method",
                    "asset_description": "To explore more read more",
                    "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                    "asset_type": "display_asset",
                    "asset_content_type": "article"
                }

            ]
        },
    ],
    "tid": 2085,
    "timestamp": 1672891849700,
    "title": "Technical Project Management",
    "type": "project",
    "uid": 100,
    "viewcount": 0,
    "publishedAt": 1672893847792
}
document.addEventListener('DOMContentLoaded', () => {
    const leftSidebar = document.getElementById('left-sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    toggleBtn.addEventListener('click', () => {
        leftSidebar.classList.toggle('open');

    });


    document.getElementById('toggleBtn').addEventListener('click', function () {
        let content1 = document.getElementById('content1');
        let content2 = document.getElementById('content2');

        if (content1.style.visibility === 'hidden') {
            content1.style.visibility = 'visible';
            content2.style.visibility = 'hidden';
        } else {
            content1.style.visibility = 'hidden';
            content2.style.visibility = 'visible';
        }
    });
});

document.getElementById('top-main-title').innerText = obj.title;

for (let i = 0; i < obj.tasks.length; i++) {
    // Update task title and description
    let taskTitleElements = document.getElementsByClassName(`task-${i + 1}-title`);
    for (let titleElement of taskTitleElements) {
        titleElement.innerText = obj.tasks[i].task_title;
    }
    document.getElementById(`task-${i + 1}-description`).innerText = obj.tasks[i].task_description;


}


const assets = obj.tasks[0].assets;

const ulElement = document.getElementById('lowerUL');

const listItems = assets.map((asset, index) => {
    const li = document.createElement('li');
    li.className = `asset-${index + 1}-title`;
    li.textContent = asset.asset_title;
    return li;
});

listItems.forEach(li => ulElement.appendChild(li));


const mainContentArray = [
    `
                            <div class="embeddedYTVideo">
                                <iframe width="792" height="446" src="https://www.youtube.com/embed/TiMRwri1xJ8"
                                    title="Technological Project Management" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>

                        `,
    `<div class="threadAHeading">
                            <i class="fa-solid fa-chevron-up"></i>
                            <h4>Thread A</h4>
                        </div>
    <div class="sub-threads-cont">
                                <div class="threadbuild-textarea">
                                    <h6>Sub thread 1</h6>
                                    <input type="text" name="" id="" placeholder="Enter Text here">
                                </div>
                                <div class="threadbuild-textarea">
                                    <h6>Sub Interpretation 1</h6>
                                    <input type="text" name="" id="" placeholder="Enter Text here">
                                </div>
                            </div>
                            <div class="thread-buttons">
                                <div><i class="fa-solid fa-lightbulb"></i></div>
                                <div><i class="fa-solid fa-message"></i></div>
                                <div><i class="fa-solid fa-clipboard-question"></i></div>
                                <div><i class="fa-solid fa-spa"></i></div>
                                <div>
                                    <select name="" id="">
                                        <option value="Select Categ" selected>Select Categ</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="Select Proces" selected>Select Proces</option>
                                    </select>
                                </div>
                            </div>
                            <div class="sub-thread-btn">
                                <i class="fa-solid fa-plus"></i> Sub-thread
                            </div>
                            <div class="summary-threadbuild-textarea">
                                <h6>Summary for Thread A</h6>
                                <input class="summary-thread-input" type="text" name="" id=""
                                    placeholder="Enter Text here">
                            </div>`,
    `<div class="title">
                                <h4>Title</h4>
                                <input type="text" name="" id="">
                            </div>
                            <div class="content">
                                <h4>Content</h4>
                                <div class="content-header">
                                    <div class="content-header-buttons">
                                        <div class="content-header-button">File</div>
                                        <div class="content-header-button">Edit</div>
                                        <div class="content-header-button">View</div>
                                        <div class="content-header-button">Insert</div>
                                        <div class="content-header-button">Format</div>
                                        <div class="content-header-button">Tools</div>
                                        <div class="content-header-button">Table</div>
                                        <div class="content-header-button">Help</div>
                                    </div>
                                    <div class="rowSecond">
                                        <div class="content-header-button"><i class="fa-solid fa-turn-up"></i></div>
                                        <div class="content-header-button"><i class="fa-solid fa-turn-down"></i></div>
                                        <div class="content-header-button"><i class="fa-solid fa-maximize"></i></div>
                                        <div class="content-header-button paragraph">Paragraph</div>
                                        <div class="content-header-button"><i class="fa-solid fa-ellipsis-vertical"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="content-main">
                                </div>
                            </div>`,
    `<div class="jumbo-elem">
                                <div class="intro">
                                    <i class="fa-solid fa-chevron-up"></i>
                                    <h4>Introduction</h4>
                                </div>
                                <div class="para">
                                    <p>The 4SA Method, How to bring an idea into progress ?</p>
                                </div>
                                <div class="see-more-btn">
                                    <p>See More</p>
                                </div>
                            </div>
                            <div class="jumbo-elem">
                                <div class="intro">
                                    <i class="fa-solid fa-chevron-up"></i>
                                    <h4>Thread A</h4>
                                </div>
                                <div class="para">
                                    <p>How are you going to develop your strategy ? Which method are you going to use to
                                        develop a strategy ? What if the project is lenghty?</p>
                                </div>
                                <div class="see-more-btn">
                                    <p>See More</p>
                                </div>
                            </div>
                            <div class="jumbo-elem">
                                <div class="intro">
                                    <h4>Example 1</h4>
                                </div>
                                <div class="para">
                                    <p>You have a concept , How will you put into progress?</p>
                                </div>
                            </div>`
];

function renderAssets(assets) {
    const rowsContainer = document.querySelector('.rows');
    rowsContainer.innerHTML = ''; // Clear previous content

    // Split assets into rows of 2
    for (let i = 0; i < assets.length; i += 2) {
        const row = document.createElement('div');
        row.className = 'row';

        for (let j = i; j < i + 2 && j < assets.length; j++) {
            const asset = assets[j];

            const assetDiv = document.createElement('div');
            assetDiv.className = 'asset';

            assetDiv.innerHTML = `
                <div class="asset-header">
                    <div class="asset-heading">
                        <h6 class="asset-title">${asset.asset_title}</h6>
                    </div>
                    <div class="asset-info">
                        <i class="fa-solid fa-info"></i>
                    </div>
                </div>
                <div class="desc">
                    <p class="asset-desc">Description: <span class="asset-description">${asset.asset_description}</span></p>
                </div>
                <div class="asset-main">${mainContentArray[j]}</div>
            `;

            row.appendChild(assetDiv);
        }

        rowsContainer.appendChild(row);
    }
}

// Call the function with assets from the JSON object
renderAssets(obj.tasks[0].assets);