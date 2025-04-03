// const participateList: string[] = [
//   "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
//   "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
// ];
// const criteriaList: string[] = [
//   "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
//   "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
// ];
// const rewardList: string[] = [
//   "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
//   "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
// ];
// const termsAndCondition: string[] = [
//   "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
//   "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
// ];
// const stepList1: HTMLElement | null = document.getElementById("step-list1");
// const stepList2: HTMLElement | null = document.getElementById("step-list2");
// const stepList3: HTMLElement | null = document.getElementById("step-list3");
// const termsAndConditionList: HTMLElement = document.getElementById("tc-list1");
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
// if (stepList1) {
//   participateList.forEach((item: string) => {
//     const li: HTMLLIElement = document.createElement("li");
//     li.textContent = item;
//     stepList1.appendChild(li);
//   });
// }
// if (stepList2) {
//   participateList.forEach((item: string) => {
//     const li: HTMLLIElement = document.createElement("li");
//     li.textContent = item;
//     stepList2.appendChild(li);
//   });
// }
// if (stepList3) {
//   participateList.forEach((item: string) => {
//     const li: HTMLLIElement = document.createElement("li");
//     li.textContent = item;
//     stepList3.appendChild(li);
//   });
// }
// if (termsAndConditionList) {
//   termsAndCondition.forEach((item: string) => {
//     const li: HTMLLIElement = document.createElement("li");
//     li.textContent = item;
//     termsAndConditionList.appendChild(li);
//   });
// }
// document.addEventListener("DOMContentLoaded", function () {
//   const params = new URLSearchParams(window.location.search);
//   const itemId = params.get("id");
//   type ContentType = "image" | "text" | "list" | "button";
//   interface ContentBlock {
//     type: ContentType;
//     content?: string;
//     items?: string[];
//     listTitle?: string;
//     style?: Record<string, string>; // for adding styles per block
//     buttonText?: string;
//   }
//   interface PromotionContent {
//     seo: {
//       title: string;
//       description: string;
//       keywords: string;
//     };
//     blocks: ContentBlock[];
//     showFinalButton?: boolean;
//     finalButtonText?: string;
//     finalButtonStyle?: Record<string, string>;
//   }
//   const contentData: Record<string, PromotionContent> = {
//     "1": {
//       seo: {
//         title:
//           "Easywin Registration Bonus - Sign Up & Get 100% Deposit Bonus | Easywin Lotto Ltd",
//         description:
//           "Sign up on Easywin today and claim your Easywin registration bonus - a 100% deposit bonus offer for the best betting experience with exciting odds and fast payouts.",
//         keywords:
//           "Easywin registration bonus, Easy win sign-up bonus, Free bet offers no deposit, Sports betting promotions, How to claim Easywin bonus",
//       },
//       blocks: [
//         {
//           type: "image",
//           content: "/assets/images/promotion-img1.png",
// style: {
//   width: "100%",
//   borderRadius: "10px",
//   height: "155px",
//   objectFit: "cover",
// },
//         },
//         {
//           type: "text",
//           content:
//             "Are you ready to win exciting prizes just by recharging your account? With the 'Top Up with PalmPay Lucky Draw,' you have the chance to win incredible rewards, including an iPhone and exclusive casino bonuses! This is your opportunity to turn every recharge into a winning moment. The more you recharge, the higher your chances of winning. Don't miss out—start participating today!",
//           style: {
//             color: "#B3B3B3",
//             fontSize: "16px",
//             fontWeight: "400px",
//           },
//         },
//         {
//           type: "text",
//           content: "How It Works",
//           style: {
//             color: "#FFFFFF",
//             fontSize: "13px",
//             fontWeight: "700px",
//           },
//         },
//         {
//           type: "text",
//           content:
//             "Participating in the Top Up with PalmPay Lucky Draw is easy and rewarding. Simply follow these steps to get started and maximize your chances of winning:",
//           style: {
//             color: "#B8B8B8",
//             fontSize: "16px",
//             fontWeight: "400px",
//           },
//         },
//         {
//           type: "list",
//           items: [
//             "Recharge a minimum of ₦500 via PalmPay to earn a lucky draw entry. Every recharge gives you one entry, increasing your chances of winning amazing prizes.",
//             "Get up to three lucky draw entries per day. The more you recharge, the higher your chances of winning!",
//             "Win incredible prizes, including an iPhone or a casino bonus. Exciting rewards await lucky participants who take part in this exclusive promotion.",
//           ],
//           style: { color: "#B3B3B3" },
//         },
//         {
//           type: "text",
//           content: "Eligibility Criteria:",
//           style: {
//             color: "#c3c3c3",
//             fontSize: "13px",
//             fontWeight: "700px",
//           },
//         },
//         {
//           type: "list",
//           items: ["Register", "Deposit", "Claim your bonus"],
//           style: { color: "#b8b8b8" },
//         },
//         {
//           type: "text",
//           content: "Reward:",
//           style: {
//             color: "#c3c3c3",
//             fontSize: "13px",
//             fontWeight: "700px",
//           },
//         },
//         {
//           type: "list",
//           items: ["Register", "Deposit", "Claim your bonus"],
//           style: { color: "#b8b8b8" },
//         },
//         {
//           type: "button",
//           buttonText: "Play Now",
//           style: {
//             background: "#02a137",
//             width: "fit-content",
//             padding: "4px 10px",
//             color: "#fff",
//             borderRadius: "5px",
//             fontSize: "15px",
//             border: "none",
//             alignSelf: "center",
//           },
//         },
//         {
//           type: "text",
//           content: "Terms and Condition:",
//           style: {
//             color: "#c3c3c3",
//             fontSize: "13px",
//             fontWeight: "700px",
//           },
//         },
//         {
//           type: "list",
//           items: ["Register", "Deposit", "Claim your bonus"],
//           style: { color: "#b8b8b8" },
//         },
//       ],
//       showFinalButton: false,
//     },
//     "2": {
//       seo: {
//         title: "Best Betting Promotions - Get Cashback on Your First Bet",
//         description: "Enjoy risk-free betting with our cashback promotion.",
//         keywords: "betting offers, free bets, cashback promo",
//       },
//       blocks: [
//         {
//           type: "text",
//           content: "Place your first bet and get a cashback if you lose!",
//           style: {
//             color: "#fff",
//             fontSize: "13px",
//           },
//         },
//         {
//           type: "image",
//           content: "/assets/images/promotion-img.png",
//           style: {
//             width: "100%",
//             borderRadius: "10px",
//             height: "193px",
//             objectFit: "cover",
//           },
//         },
//         {
//           type: "list",
//           items: ["Sign up", "Bet", "Get cashback"],
//           listTitle: "Follow These Steps",
//           style: { color: "#b8b8b8" },
//         },
//         // {
//         //   type: "button",
//         //   buttonText: "Join Now",
//         // },
//         {
//           type: "text",
//           content: "Cashback is credited within 24 hours.",
//           style: { color: "#b8b8b8" },
//         },
//       ],
//       showFinalButton: true,
//       finalButtonText: "Start Playing",
//       finalButtonStyle: {
//         backgroundColor: "#28a745",
//         color: "#fff",
//         padding: "12px 25px",
//         borderRadius: "8px",
//         border: "none",
//       },
//     },
//   };
//   const container = document.querySelector(".details-container") as HTMLElement;
//   if (itemId && contentData[itemId]) {
//     const item = contentData[itemId];
//     // update seo metadata dynamically
//     document.title = item.seo.title;
//     let metaDescription = document.querySelector(
//       "meta[name='description']"
//     ) as HTMLMetaElement;
//     if (!metaDescription) {
//       metaDescription = document.createElement("meta");
//       metaDescription.name = "description";
//       document.head.appendChild(metaDescription);
//     }
//     metaDescription.content = item.seo.description;
//     let metaKeywords = document.querySelector(
//       "meta[name='keywords']"
//     ) as HTMLMetaElement;
//     if (!metaKeywords) {
//       metaKeywords = document.createElement("meta");
//       metaKeywords.name = "keywords";
//       document.head.appendChild(metaKeywords);
//     }
//     metaKeywords.content = item.seo.keywords;
//     ``;
//     // to clear existing content
//     container.innerHTML = "";
//     // to display content blocks dynamically
//     item.blocks.forEach((block) => {
//       let element: HTMLElement;
//       if (block.type === "image" && block.content) {
//         element = document.createElement("img");
//         (element as HTMLImageElement).src = block.content;
//         (element as HTMLImageElement).alt = "promotion image";
//         // custom styles
//         if (block.style) {
//           Object.keys(block.style).forEach((key) => {
//             (element as HTMLElement).style.setProperty(key, block.style![key]);
//           });
//         }
//       } else if (block.type === "text" && block.content) {
//         element = document.createElement("p");
//         element.textContent = block.content;
//         if (block.style) {
//           Object.keys(block.style).forEach((key) => {
//             (element as HTMLElement).style.setProperty(key, block.style![key]);
//           });
//         }
//       } else if (block.type === "list" && block.items) {
//         const stepsContainer = document.createElement("div");
//         stepsContainer.className = "steps";
//         const stepWrapper = document.createElement("div");
//         stepWrapper.className = "step";
//         // add list title if provided
//         if (block.listTitle) {
//           const title = document.createElement("h2");
//           title.textContent = block.listTitle;
//           stepWrapper.appendChild(title);
//         }
//         // create list if provided
//         const listElement = document.createElement("ul");
//         block.items.forEach((item) => {
//           const li = document.createElement("li");
//           li.textContent = item;
//           listElement.appendChild(li);
//         });
//         stepWrapper.appendChild(listElement);
//         stepsContainer.appendChild(stepWrapper);
//         element = stepsContainer;
//         if (block.style) {
//           Object.keys(block.style).forEach((key) => {
//             (element as HTMLElement).style.setProperty(key, block.style![key]);
//           });
//         }
//       } else if (block.type === "button" && block.buttonText) {
//         const buttonWrapper = document.createElement("div"); // wrapper div
//         buttonWrapper.style.display = "flex";
//         buttonWrapper.style.justifyContent = "center";
//         element = document.createElement("button");
//         element.className = "steps-btn";
//         element.textContent = block.buttonText;
//         if (block.style) {
//           Object.keys(block.style).forEach((key) => {
//             const value = block.style?.[key] ?? "";
//             element.style.setProperty(
//               key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`), // convert camelCase styles to kebab-case
//               value
//             );
//           });
//         }
//         buttonWrapper.appendChild(element);
//         container.appendChild(buttonWrapper);
//       } else {
//         return;
//       }
//       container.appendChild(element);
//     });
//     // down or last button if any
//     if (item.showFinalButton) {
//       const finalButton = document.createElement("button");
//       finalButton.className = "steps-btn";
//       finalButton.textContent = item.finalButtonText || "Play Now";
//       if (item.finalButtonStyle) {
//         Object.keys(item.finalButtonStyle).forEach((key) => {
//           const value = item.finalButtonStyle?.[key] ?? "";
//           finalButton.style.setProperty(
//             key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`), // convert camelCase styles to kebab-case
//             value
//           );
//         });
//       }
//       container.appendChild(finalButton);
//     }
//   } else {
//     container.innerHTML = "<h2>Promotion Not Found</h2>";
//   }
// });
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
