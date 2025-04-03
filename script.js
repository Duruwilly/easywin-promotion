document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("toggle-button")
    .addEventListener("click", function () {
      const hiddenRows = document.querySelectorAll(".hidden-rows");
      const tableContainer = document.getElementById("table-container");
      if (
        hiddenRows[0].style.display === "none" ||
        hiddenRows[0].style.display === ""
      ) {
        hiddenRows.forEach((row) => (row.style.display = "table-row"));
        tableContainer.style.maxHeight = "none";
        this.textContent = "▲ Show Less";
      } else {
        hiddenRows.forEach((row) => (row.style.display = "none"));
        tableContainer.style.maxHeight = "250px";
        this.textContent = "▼ Show More";
      }
    });

  var params = new URLSearchParams(window.location.search);
  var itemId = params.get("id");
  var contentData = {
    1: {
      seo: {
        title: "Easywin Registration Bonus - Get 100% on Your First Deposit",
        description: "Join Easywin and claim your 100% welcome bonus.",
        keywords: "Easywin, betting bonus, 100% deposit match",
      },
      blocks: [
        {
          type: "image",
          content: "/assets/images/promotion-img1.png",
          style: {
            width: "100%",
            borderRadius: "10px",
            height: "155px",
            objectFit: "cover",
          },
          position: 1,
        },
        {
          type: "text",
          content: "Register on Easywin, deposit, and get a ",
          spans: [
            { text: "100% bonus", style: { fontWeight: "bold", color: "red" } },
          ],
          position: 2,
        },
        {
          type: "list",
          listTitle: "How to Claim Your Bonus",
          listTitleStyle: {
            fontSize: "20px",
            fontWeight: "bold",
            color: "blue",
          },
          listItemStyle: { color: "#333" },
          listGap: "10px",
          items: [
            { text: "Register on Easywin" },
            { text: "Deposit money" },
            {
              text: "Claim your ",
              spans: [
                {
                  text: "100% Bonus",
                  style: { fontWeight: "bold", color: "green" },
                },
              ],
            },
          ],
          position: 3,
        },
        {
          type: "button",
          buttonText: "Claim Bonus Now",
          style: {
            backgroundColor: "#ff4500",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
          },
          position: 4,
        },
      ],
      finalButton: {
        text: "Start Playing",
        style: {
          backgroundColor: "#28a745",
          color: "#fff",
          padding: "12px 25px",
          borderRadius: "8px",
        },
      },
    },
  };
  var container = document.querySelector(".details-container");
  if (itemId && contentData[itemId]) {
    var item = contentData[itemId];
    // **Update SEO Metadata**
    document.title = item.seo.title;
    var updateMetaTag = function (name, content) {
      var meta = document.querySelector("meta[name='".concat(name, "']"));
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    updateMetaTag("description", item.seo.description);
    updateMetaTag("keywords", item.seo.keywords);
    // **Clear existing content**
    container.innerHTML = "";
    // **Sort blocks by position**
    var sortedBlocks = __spreadArray([], item.blocks, true).sort(function (
      a,
      b
    ) {
      return (a.position || 0) - (b.position || 0);
    });
    sortedBlocks.forEach(function (block) {
      var element;
      if (block.type === "image" && block.content) {
        var imgWrapper = document.createElement("div");
        imgWrapper.style.position = "relative";
        var img_1 = document.createElement("img");
        img_1.src = block.content;
        img_1.alt = "Promotion Image";
        // Apply styles to the image
        if (block.style) {
          Object.keys(block.style).forEach(function (key) {
            img_1.style.setProperty(key, block.style[key]);
          });
        }
        // Add transparent black overlay at the bottom
        var overlay = document.createElement("div");
        overlay.style.position = "absolute";
        overlay.style.bottom = "0";
        overlay.style.width = "100%";
        overlay.style.height = "20%"; // Adjust height as needed
        overlay.style.background =
          "linear-gradient(to top, rgba(0,0,0,0.7), transparent)";
        imgWrapper.appendChild(img_1);
        imgWrapper.appendChild(overlay);
        element = imgWrapper;
      } else if (block.type === "text" && block.content) {
        element = document.createElement("p");
        element.textContent = block.content;
        // Handle spans
        if (block.spans) {
          block.spans.forEach(function (spanData) {
            var span = document.createElement("span");
            span.textContent = spanData.text;
            if (spanData.style) {
              Object.keys(spanData.style).forEach(function (key) {
                span.style.setProperty(key, spanData.style[key]);
              });
            }
            element.appendChild(span);
          });
        }
      } else if (block.type === "list" && block.items) {
        var stepsContainer = document.createElement("div");
        stepsContainer.className = "steps";
        var stepWrapper = document.createElement("div");
        stepWrapper.className = "step";
        if (block.listTitle) {
          var title_1 = document.createElement("h2");
          title_1.textContent = block.listTitle;
          // Apply title styles
          if (block.listTitleStyle) {
            Object.keys(block.listTitleStyle).forEach(function (key) {
              title_1.style.setProperty(key, block.listTitleStyle[key]);
            });
          }
          stepWrapper.appendChild(title_1);
        }
        var listElement_1 = document.createElement("ul");
        block.items.forEach(function (itemData) {
          var li = document.createElement("li");
          li.textContent = itemData.text;
          // Apply list item styles
          if (block.listItemStyle) {
            Object.keys(block.listItemStyle).forEach(function (key) {
              li.style.setProperty(key, block.listItemStyle[key]);
            });
          }
          // Add spans inside list items
          if (itemData.spans) {
            itemData.spans.forEach(function (spanData) {
              var span = document.createElement("span");
              span.textContent = spanData.text;
              if (spanData.style) {
                Object.keys(spanData.style).forEach(function (key) {
                  span.style.setProperty(key, spanData.style[key]);
                });
              }
              li.appendChild(span);
            });
          }
          listElement_1.appendChild(li);
        });
        // Apply list gap
        if (block.listGap) {
          listElement_1.style.gap = block.listGap;
          listElement_1.style.display = "flex";
          listElement_1.style.flexDirection = "column";
        }
        stepWrapper.appendChild(listElement_1);
        stepsContainer.appendChild(stepWrapper);
        element = stepsContainer;
      } else {
        return;
      }
      container.appendChild(element);
    });
  }
});
