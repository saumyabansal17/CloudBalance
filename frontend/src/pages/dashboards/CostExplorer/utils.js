export const dataSource = {
  chart: {
    caption: "App Publishing Trend",
    subcaption: "2018-2022",
    xaxisname: "Years",
    yaxisname: "Total number of apps in store",
    formatnumberscale: "1",
    theme: "candy",
    drawcrossline: "1",

    bgColor: "#ffffff",
    captionFontColor: "#111827", 

    numDivLines: "5",
    divLineColor: "#d1d5db",
    divLineDashed: "1",
    divLineDashLen: "4",

    showXAxisLine: "1",
    showYAxisLine: "1",
    labelFontColor: "#111827",

    // plotSpacePercent: "60",

  },
  
  categories: [
    {
      category: [
        {
          label: "2018"
        },
        {
          label: "2019"
        },
        {
          label: "2020"
        },
        {
          label: "2021"
        },
        {
          label: "2022"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Apple App Store",
      data: [
        {
          value: "1962576"
        },
        {
          value: "1798024"
        },
        {
          value: "1961897"
        },
        {
          value: "1903654"
        },
        {
          value: "1642759"
        }
      ]
    },
    {
      seriesname: "Google Play Store",
      data: [
        {
          value: "2108450"
        },
        {
          value: "2469894"
        },
        {
          value: "2868084"
        },
        {
          value: "4229856"
        },
        {
          value: "3553050"
        }
      ]
    },
    {
      seriesname: "Amazon AppStore",
      data: [
        {
          value: "452054"
        },
        {
          value: "487083"
        },
        {
          value: "455873"
        },
        {
          value: "467823"
        },
        {
          value: "483328"
        }
      ]
    }
  ]
};

export const groupByOptions = [
    "Resource",
    "Instance Type",
    "Service",
    "Account ID",
    "Usage Type",
    "Platform",
    "Region",
    "Purchase Option",
    "API Operation",
    "Charge Type",
    "Availabilityzone",
    "Tenancy",
    "Legal Entity",
    "Billing Entity"
  ];

export const groupByApiMap = {
  "Resource":"RESOURCE",
    "Instance Type":"INSTANCE_TYPE",
    "Service":"SERVICE",
    "Account ID":"ACCOUNT_ID",
    "Usage Type":"USAGE_TYPE",
    "Platform":"PLATFORM",
    "Region":"REGION",
    "Purchase Option":"PURCHASE_OPTION",
    "API Operation":"API_OPERATION",
    "Charge Type":"CHARGE_TYPE",
    "Availabilityzone":"AVAILABILITY_ZONE",
    "Tenancy":"TENANCY",
    "Legal Entity":"LEGAL_ENTITY",
    "Billing Entity":"BILLING_ENTITY"
};


export const filters=[{
    label: "INSTANCE_TYPE",
    values: [
      "c4.large",
      "c4.xlarge",
      "c4.8xlarge",
      "c5.large",
      "c5.xlarge",
      "c5.2xlarge",
      "c5.4xlarge",
      "c5.9xlarge",
      "No Instance Type",
    ],
  },
  {
    label: "SERVICE",
    values: [
      "Amazon EC2",
      "Amazon S3",
      "Amazon RDS",
      "Amazon CloudFront",
      "Amazon DynamoDB",
      "Amazon Lambda",
    ],
  },
  {
    label: "REGION",
    values: [
      "us-east-1",
      "us-west-2",
      "ap-south-1",
      "eu-west-1",
      "ap-northeast-1",
    ],
  },
];

// export const tableData = {
//   columns: [
//     "May 2025",
//     "Jun 2025",
//     "Jul 2025",
//     "Aug 2025",
//     "Sep 2025",
//     "Oct 2025",
//     "Nov 2025",
//     "Dec 2025",
//   ],
//   rows: [
//     {
//       key: "831059512818",
//       values: [108088.47, 135308.22, 140468.46, 140112.35, 130312.49, 118640.07, 124029.83, 85493.53],
//       total: 982453.43,
//     },
//     {
//       key: "039612865345",
//       values: [1900.58, 2570.53, 3316.24, 3116.31, 3757.38, 5007.87, 5190.54, 4261.76],
//       total: 29121.21,
//     },
//   ],
//   grandTotal: [112575.82, 140810.90, 146451.69, 145951.10, 136922.58, 126343.99, 131514.16, 91081.42],
//   grandSum: 1031651.66,
// };

// export const costData = {
//   columns: [
//     "May 2025",
//     "Jun 2025",
//     "Jul 2025",
//     "Aug 2025",
//     "Sep 2025",
//     "Oct 2025",
//     "Nov 2025",
//     "Dec 2025",
//   ],
//   rows: [
//     {
//       key: "831059512818",
//       values: [108088.47, 135308.22, 140468.46, 140112.35, 130312.49, 118640.07, 124029.83, 85493.53],
//     },
//     {
//       key: "039612865345",
//       values: [1900.58, 2570.53, 3316.24, 3116.31, 3757.38, 5007.87, 5190.54, 4261.76],
//     },
//   ],
// };

// utils/dateUtils.js
export const getMonthsBetween = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const months = [];

  let current = new Date(startDate.getFullYear(), startDate.getMonth(), 1);

  while (current <= endDate) {
    const monthStr = `${current.getFullYear()}-${(current.getMonth() + 1)
      .toString()
      .padStart(2, "0")}`; 
    months.push(monthStr);
    current.setMonth(current.getMonth() + 1);
  }

  return months;
};


