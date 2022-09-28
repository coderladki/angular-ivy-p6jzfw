import { Component, VERSION } from '@angular/core';
export const PAGES_MENU = [
  {
    companyType: [0],
    path: 'pages',
    menuType: [0],
    outletType: [0],
    children: [
      {
        companyType: [0],
        outletType: [1, 2, 3],
        path: '',
        menuType: [0],
        data: {
          menu: {
            title: 'BPOS',
            icon: 'ion-android-home',
            selected: true,
            expanded: false,
            order: 0,
          },
        },
        children: [
          {
            companyType: [0],
            path: 'dashboard',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Dashboard',
                icon: 'ion-navicon-round',
                selected: true,
                expanded: false,
                order: 0,
              },
            },
          },
          {
            companyType: [0],
            path: 'aboutcompany',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'About Company',
                icon: 'glyphicon glyphicon-info-sign',
                selected: true,
                expanded: false,
                order: 0,
              },
            },
          },
          // {
          // companyType:[0],
          // path: "terminal",
          //   menuType: [],
          //   data: {
          //     menu: {
          //       title: "Terminal Setup",
          //       icon: "ion-gear-b",
          //       selected: false,
          //       expanded: false,
          //       order: 700
          //     }
          //   }
          // },
          // {
          // companyType:[0],
          //            path: "backup-restore",
          //   menuType: [],
          //   isOnlyCentral: true,
          //   data: {
          //     menu: {
          //       title: "Backup & Restore",
          //       icon: "ion-android-upload",
          //       selected: false,
          //       expanded: false,
          //       order: 0
          //     }
          //   }
          // }
        ],
      },
      {
        companyType: [0],
        path: 'masters',
        menuType: [0],
        outletType: [1, 2, 3],
        data: {
          menu: {
            //slug: "masters",
            title: 'Masters',
            icon: 'fa fa-user',
            selected: false,
            expanded: false,
            order: 2,
          },
        },
        children: [
          {
            companyType: [0],
            path: '',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                // parent_slug: "masters",
                // slug: "settings",
                title: 'Settings',
                icon: 'ion-gear-b',
                selected: false,
                expanded: false,
              },
            },
            children: [
              // {
              // companyType:[0],//
              // path: "ruchisoyaconfiguration",
              //   menuType: [0],
              //   isOnlyCentral: true,
              //   data: {
              //     menu: {
              //       title: "Ruchi Soya Configuration"
              //     }
              //   }
              // },
              // {
              // companyType:[0],//
              // path: "deliveryordertransfer",
              //   menuType: [1],
              //   isOnlyCentral: true,
              //   data: {
              //     menu: {
              //       title: "Delivery Order Transfer"
              //     }
              //   }
              // },
              // {
              // companyType:[0],//
              // path: "batchpricinglist",
              //   menuType: [],
              //   isOnlyCentral: true,
              //   data: {
              //     menu: {
              //       title: "Batch Pricing"
              //     }
              //   }
              // },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                menuType: [],
                data: {
                  menu: {
                    title: 'Brand',
                    selected: false,
                    expanded: false,
                  },
                },
                children: [
                  // {
                  //   path: "brandtype",
                  //   data: {
                  //     menu: {
                  //       title: "Brand Type",
                  //       selected: false,
                  //       expanded: false
                  //     }
                  //   }
                  // },
                  {
                    companyType: [0],
                    path: 'brand',
                    menuType: [],
                    outletType: [1, 2, 3],
                    isOnlyCentral: true,
                    data: {
                      menu: {
                        title: 'Brand',
                        selected: false,
                        expanded: false,
                      },
                    },
                  },
                ],
              },

              {
                companyType: [0],
                path: 'BranchList',
                menuType: [],
                outletType: [1, 2, 3],
                isOnlyCentral: true,
                data: {
                  menu: {
                    title: 'Company',
                  },
                },
              },
              // {
              // companyType:[0],//
              // path: "cost-center",
              //   menuType: [],
              //   isOnlyCentral: true,
              //   data: {
              //     menu: {
              //       title: "CostCenter"
              //     }
              //   }
              // },
              {
                companyType: [0],
                path: 'category',
                menuType: [],
                outletType: [1, 2, 3],
                isOnlyCentral: true,
                data: {
                  menu: {
                    title: 'Category',
                  },
                },
              },
              {
                companyType: [0],
                path: 'scheme-view',
                menuType: [0],
                outletType: [1, 2, 3],
                isOnlyCentral: false,
                data: {
                  menu: {
                    title: 'Scheme View',
                  },
                },
              },

              // {
              //   path: "customer-info",
              //   data: {
              //     menu: {
              //       title: "Customer Info"
              //     }
              //   }
              // },
              // {
              // companyType:[0],//
              // path: "channel",
              //   menuType: [],
              //   isOnlyCentral: true,
              //   data: {
              //     menu: {
              //       title: "Channel"
              //     }
              //   }
              // },
              {
                companyType: [0],
                path: 'divisionList',
                menuType: [0],
                outletType: [1, 2, 3],
                isOnlyCentral: true,
                data: {
                  menu: {
                    title: 'Division',
                  },
                },
              },
              // {
              //   companyType: [0],
              //   path: "deliveryBoyList",
              //   menuType: [0],
              //   isOnlyCentral: true,
              //   data: {
              //     menu: {
              //       title: "DeliveryBoy Master"
              //     }
              //   }
              // },
              //companyType:[0], {

              //   menuType: [],
              //   data: {
              //     menu: {
              //       title: "Organisation",
              //       selected: false,
              //       expanded: false
              //     }
              //   },
              //   children: [
              //     {
              // companyType:[0],//
              // path: "organizationhierarchy",
              //       menuType: [],
              //       isOnlyCentral: true,
              //       data: {
              //         menu: {
              //           title: "Organization Hierarchy",
              //           selected: false,
              //           expanded: false
              //         }
              //       }
              //     },
              //     {
              // companyType:[0],//
              // path: "organizationtype",
              //       menuType: [],
              //       isOnlyCentral: true,
              //       data: {
              //         menu: {
              //           title: "Organization Type",
              //           selected: false,
              //           expanded: false
              //         }
              //       }
              //     }
              //   ]
              // },
              // {
              // companyType:[0],//
              // path: "productHierarchy",
              //   menuType: [],
              //   isOnlyCentral: true,
              //   data: {
              //     menu: {
              //       title: "Product Hierarchy"
              //     }
              //   }
              // },

              // {
              // companyType:[0],//
              // path: "routemaster",
              //   menuType: [1],
              //   isOnlyCentral: true,
              //   data: {
              //     menu: {
              //       title: "Router Master"
              //     }
              //   }
              // },
              {
                companyType: [0],
                path: 'salesman',
                outletType: [1, 2, 3],
                menuType: [0],
                isOnlyCentral: true,
                data: {
                  menu: {
                    title: 'Sales Man',
                    selected: false,
                    expanded: false,
                  },
                },
              },
              {
                companyType: [0],
                path: 'salesmanCommission',
                outletType: [1, 2, 3],
                menuType: [0],
                isOnlyCentral: true,
                data: {
                  menu: {
                    title: 'SalesMan Commission',
                    selected: false,
                    expanded: false,
                  },
                },
              },
              {
                companyType: [0],
                path: 'coachMaster',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Coach Master',
                    selected: false,
                    expanded: false,
                  },
                },
              },
              {
                companyType: [0],
                path: 'prepaidcard',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Prepaid Card',
                  },
                },
                children: [
                  {
                    companyType: [0],
                    path: 'prepaidcardcreate',
                    menuType: [0],
                    outletType: [1, 2, 3],
                    data: {
                      menu: {
                        title: 'Prepaid Card Creation',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'issuePrepaidCardlist',
                    menuType: [0],
                    outletType: [1, 2, 3],
                    data: {
                      menu: {
                        title: 'Prepaid Card Issue',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'rechargePrepaidCardList',
                    menuType: [0],
                    outletType: [1, 2, 3],
                    data: {
                      menu: {
                        title: 'Recharge Prepaid Card',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'returnPrepaidCard',
                    menuType: [0],
                    outletType: [1, 2, 3],
                    data: {
                      menu: {
                        title: 'Return Prepaid Card',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'blockPrepaidCard',
                    menuType: [0],
                    outletType: [1, 2, 3],
                    data: {
                      menu: {
                        title: 'Block Prepaid Card',
                      },
                    },
                  },
                ],
              },
              // companyType: [0],
              // outletType: [1, 2, 3],
              // menuType: [0],
              // data: {
              //   menu: {
              //     title: "Sales",
              //     selected: false,
              //     expanded: false
              //   }

              // children: [
              //   // {
              //   //   companyType: [0],
              //   //   outletType: [1, 2, 3],
              //   //   path: "salesarealist",
              //   //   menuType: [1],
              //   //   isOnlyCentral: true,
              //   //   data: {
              //   //     menu: {
              //   //       title: "Sales Areas",
              //   //       selected: false,
              //   //       expanded: false
              //   //     }
              //   //   }
              //   // },
              //   // {
              //   // companyType:[0],//
              //   // path: "sales-man-type",
              //   //   menuType: [1],
              //   //   isOnlyCentral: true,
              //   //   data: {
              //   //     menu: {
              //   //       title: "Salesman Type",
              //   //       selected: false,
              //   //       expanded: false
              //   //     }
              //   //   }
              //   // },
              //   {
              //     companyType: [0],
              //     path: "salesman",
              //     outletType: [1, 2, 3],
              //     menuType: [0],
              //     isOnlyCentral: true,
              //     data: {
              //       menu: {
              //         title: "Sales Man",
              //         selected: false,
              //         expanded: false
              //       }
              //     }
              //   },
              //   // {
              //   // companyType:[0],//
              //   // path: "sales-terminal",
              //   //   menuType: [1],
              //   //   isOnlyCentral: true,
              //   //   data: {
              //   //     menu: {
              //   //       title: "Sales Terminal",
              //   //       selected: false,
              //   //       expanded: false
              //   //     }
              //   //   }
              //   // },
              //   {
              //     companyType: [0],
              //     path: "salesHierarchy",
              //     outletType: [1, 2, 3],
              //     menuType: [1],
              //     isOnlyCentral: true,
              //     data: {
              //       menu: {
              //         title: "Sales Hierarchy",
              //         selected: false,
              //         expanded: false
              //       }
              //     }
              //   },
              //   // {
              //   // companyType:[0],//
              //   // path: "geograhphicalHeirarchy",
              //   //   menuType: [1],
              //   //   isOnlyCentral: true,
              //   //   data: {
              //   //     menu: {
              //   //       title: "Sales Officer Master",
              //   //       selected: false,
              //   //       expanded: false
              //   //     }
              //   //   }
              //   // },

              //   // {
              //   // companyType:[0],//
              //   // path: "salesareatype",
              //   //   menuType: [1],
              //   //   isOnlyCentral: true,
              //   //   data: {
              //   //     menu: {
              //   //       title: "Sales Area Type",
              //   //       selected: false,
              //   //       expanded: false
              //   //     }
              //   //   }
              //   // },

              //   // {
              //   // companyType:[0],//
              //   // path: "salesorganization",
              //   //   menuType: [1],
              //   //   isOnlyCentral: true,
              //   //   data: {
              //   //     menu: {
              //   //       title: "Sales Organization",
              //   //       selected: false,
              //   //       expanded: false
              //   //     }
              //   //   }
              //   // },
              // ]

              // {
              // companyType:[0],//
              // path: "statelist",
              //   menuType: [1],
              //   isOnlyCentral: true,
              //   data: {
              //     menu: {
              //       title: "State List"
              //     }
              //   }
              // },
              // {
              //   path: "SchemeMasterTable",
              //   isOnlyCentral: true,
              //   data: {
              //     menu: {
              //       title: "Scheme"
              //     }
              //   }
              // },

              // {
              // companyType:[0],//
              // path: "TaxGroupTable",
              //   menuType: [],
              //   isOnlyCentral: true,
              //   data: {
              //     menu: {
              //       title: "Tax Group"
              //     }
              //   }
              // }
            ],
          },
          {
            companyType: [0],
            path: 'PartyLedger',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Customer',
                icon: 'nb-compose',
              },
            },
            children: [
              {
                companyType: [0],
                path: 'CustomerList',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Customer Master',
                  },
                },
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: 'customercategoryList',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Customer Category',
                  },
                },
              },
            ],
          },

          {
            companyType: [0],
            path: 'PartyLedger',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Supplier',
                icon: 'nb-compose',
              },
            },
            children: [
              {
                companyType: [0],
                path: 'SupplierList',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Supplier Master',
                  },
                },
              },
              {
                companyType: [0],
                path: 'suppliervsitem',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Item Vs Supplier',
                  },
                },
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: 'suppliercategorylist',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Supplier Category',
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: 'employee-master',
            outletType: [1, 2, 3],
            menuType: [0],
            data: {
              menu: {
                title: 'Employee',
                icon: 'nb-compose',
              },
            },
            children: [
              {
                companyType: [0],
                path: 'list',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Employee Master',
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: 'addDeliveryBoy',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Delivery Boy Master',
                icon: 'nb-compose',
              },
            },
            children: [
              {
                companyType: [0],
                path: '',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Delivery Boy',
                  },
                },
              },
            ],
          },
          {
            companyType: [1],
            path: 'doctor-master',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Doctor',
                icon: 'nb-compose',
              },
            },
            children: [
              {
                companyType: [1],
                path: 'list',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Doctor Master',
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: 'tPartyLedger',
            outletType: [1, 2, 3],
            menuType: [0],
            data: {
              menu: {
                title: 'Inter Company Party',
                icon: 'nb-compose',
              },
            },
            children: [
              {
                companyType: [0],
                path: 'tCustomerList',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Inter Company Party Master',
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: 'utility',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Utility',
                icon: 'nb-coffee-maker',
              },
            },
            children: [
              {
                companyType: [0],
                path: 'transporter',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Transporter',
                  },
                },
              },
              {
                companyType: [0],
                path: 'currency',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Currency',
                  },
                },
              },
              {
                companyType: [0],
                path: 'loyalty',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Loyalty',
                  },
                },
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: 'customerwisemaxqtylist',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Customerwise max quantity',
                  },
                },
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: 'customer-item-mapping',
                menuType: [2],
                data: {
                  menu: {
                    title: 'Customer Item Mapping',
                  },
                },
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: 'dataClear',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Data Clear',
                  },
                },
              },
              {
                companyType: [0],
                outletType: [1, 3],
                path: 'predefinedRemark',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Predefined Remark',
                  },
                },
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: 'divisionCreation',
                menuType: [2],
                data: {
                  menu: {
                    title: 'Division Creation',
                  },
                },
              },
            ],
          },

          {
            companyType: [0],
            path: 'item',
            outletType: [1, 2, 3],
            menuType: [0],
            data: {
              menu: {
                title: 'Item',
                icon: 'nb-coffee-maker',
              },
            },
            children: [
              {
                companyType: [0],
                path: 'itempricechange',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Item Price Change',
                  },
                },
              },
              {
                companyType: [0],
                path: 'priceDrop',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Price Drop',
                  },
                },
              },
              {
                companyType: [0],
                path: 'item-property-setting',
                menuType: [2],
                data: {
                  menu: {
                    title: 'Item Property Setting',
                  },
                },
              },
              {
                companyType: [0],
                path: 'priceFormula',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Price Formula',
                  },
                },
              },
              {
                companyType: [0],
                path: 'priceLevelManager',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Price Level Manager',
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: 'inventory-info',
            outletType: [1, 2, 3],
            menuType: [0],
            data: {
              menu: {
                title: 'Inventory Info',
                icon: 'nb-coffee-maker',
              },
            },
            children: [
              {
                companyType: [0],
                path: 'productmaster',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Product Master',
                  },
                },
              },

              {
                companyType: [0],
                path: 'departmentvscategory',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Department Vs Categories',
                  },
                },
              },
              {
                companyType: [0],
                path: 'categorymaster',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Category Master',
                  },
                },
              },
              {
                companyType: [0],
                path: 'hcategorymaster',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Hierarchical Category Master',
                  },
                },
              },
              // {
              //   companyType: [0],
              //   path: "itempricechangeDomainWise",
              //   outletType: [1, 2, 3],
              //   menuType: [0],
              //   data: {
              //     menu: {
              //       title: "Item Price Change Domain Wise"
              //     }
              //   }
              // },
              {
                companyType: [0],
                path: 'unit-list',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Unit Of Measurement',
                  },
                },
              },
              {
                companyType: [0],
                path: 'comboItem',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Combo Mapping',
                  },
                },
              },
              {
                companyType: [0],
                path: 'itemsplitmapping',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Item Split Mapping',
                  },
                },
              },
              {
                companyType: [0],
                path: 'kit-config',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Combo Packing',
                  },
                },
              },
              {
                companyType: [0],
                path: 'kit-configQualityCheck',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Packing Quality Check',
                  },
                },
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: 'unpack',
                menuType: [0],
                data: {
                  menu: {
                    title: 'UnPacking',
                  },
                },
              },
              {
                companyType: [0],
                path: 'taxslab',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Tax-Slab Rate Master',
                  },
                },
              },
              {
                companyType: [0],
                path: 'itemVsRackMapping',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Item Vs Rack Mapping',
                  },
                },
              },
              {
                companyType: [0],
                path: 'warehouseVsTrayMapping',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Warehouse Vs Tray Mapping',
                  },
                },
              },
              {
                companyType: [0],
                path: 'itemdepreciationmaster',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Non Trading Item Account Mapping',
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: 'tendertype',
            outletType: [1, 2, 3],
            menuType: [0],
            data: {
              menu: {
                title: 'Tender',
              },
            },
          },
          {
            companyType: [0],
            path: 'targets',
            outletType: [1],
            menuType: [0],
            data: {
              menu: {
                title: 'Targets',
              },
            },
          },
          {
            companyType: [0],
            path: 'manufacturer-master',
            outletType: [1, 2, 3],
            menuType: [0],
            data: {
              menu: {
                title: 'Manufacturer Master',
              },
            },
          },

          // {
          // companyType:[0],//
          // path: "item-master",
          //   menuType: [0],
          //   data: {
          //     menu: {
          //       title: "Item Master"
          //     }
          //   }
          // }
        ],
      },
      {
        companyType: [0],
        path: 'transaction',
        outletType: [1, 2, 3],
        menuType: [0],
        data: {
          menu: {
            title: 'Transaction',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 3,
          },
        },
        children: [
          {
            companyType: [0],
            path: 'sales',
            outletType: [1, 2, 3],
            menuType: [0],
            data: {
              menu: {
                title: 'Sales',
                selected: false,
                expanded: false,
                order: 5,
              },
            },
            children: [
              {
                companyType: [0],
                path: 'sales-order',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Sales Order',
                  },
                },
              },
              {
                companyType: [0],
                path: 'performa-invoice',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Proforma Invoice',
                  },
                },
              },
              {
                companyType: [0],
                path: 'delivery-challaan',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Delivery Challan',
                  },
                },
              },
              {
                companyType: [0],
                path: 'quotationinvoice',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Quotation Invoice',
                  },
                },
              },
              {
                companyType: [0],
                path: 'cash-handover',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Cash Handover',
                  },
                },
              },
              {
                companyType: [0],
                path: 'session-management',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Session Management',
                  },
                },
              },
              {
                companyType: [0],
                path: 'addsientry',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Sales Invoice',
                  },
                },
              },
              {
                companyType: [0],
                path: 'countersales',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Counter Sale',
                  },
                },
              },
              {
                companyType: [0],
                path: 'add-creditnote-itembase',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Sales Return',
                  },
                },
              },
              {
                companyType: [0],
                menuType: [0],
                path: 'transfer-out',
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Inter Company Transfer Out',
                  },
                },
              },

              {
                companyType: [0],
                path: 'loadchart',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Load Sheet',
                  },
                },
              },
              {
                companyType: [0],
                path: 'samayojan',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Samayojan',
                  },
                },
              },

              {
                companyType: [0], //
                path: 'salesinvoicedelivery',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Invoice Delivery',
                  },
                },
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: '',
                menuType: [0],
                data: {
                  menu: {
                    title: 'CRM',
                    selected: false,
                    expanded: false,
                  },
                },
                children: [
                  {
                    companyType: [0], //
                    path: 'discountcouponmaster',
                    menuType: [0],
                    outletType: [1, 2, 3],
                    data: {
                      menu: {
                        title: 'Discount Coupon',
                      },
                    },
                  },

                  {
                    companyType: [0], //
                    path: 'couponcreation',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Coupon Creation',
                      },
                    },
                  },
                  {
                    companyType: [0], //
                    path: 'couponallotement',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Coupon Allotment',
                      },
                    },
                  },
                  {
                    companyType: [0], //
                    path: 'coupontouser',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Coupon Issue',
                      },
                    },
                  },
                  // {
                  //   companyType: [0],//
                  //   path: "giftvouchermaster",
                  //   menuType: [0],
                  //   outletType: [1, 2, 3],
                  //   data: {
                  //     menu: {
                  //       title: "Gift Voucher"
                  //     }
                  //   }
                  // },
                  // {
                  //   companyType: [0],//
                  //   path: "giftvoucherallotement",
                  //   outletType: [1, 2, 3],
                  //   menuType: [0],
                  //   data: {
                  //     menu: {
                  //       title: "Gift Voucher Allotment"
                  //     }
                  //   }
                  // },
                  // {
                  //   companyType: [0],//
                  //   path: "giftvouchercreation",
                  //   outletType: [1, 2, 3],
                  //   menuType: [0],
                  //   data: {
                  //     menu: {
                  //       title: "Gift Voucher Pattern Creation"
                  //     }
                  //   }
                  // }
                ],
              },
              // {
              //   companyType: [0],//
              //   path: "discountcouponmaster",
              //   menuType: [0],
              //   outletType: [1, 2, 3],
              //   data: {
              //     menu: {
              //       title: "Discount Coupon"
              //     }
              //   }
              // },
              // {
              //   companyType: [0],//
              //   path: "giftvouchermaster",
              //   menuType: [0],
              //   outletType: [1, 2, 3],
              //   data: {
              //     menu: {
              //       title: "Gift Voucher"
              //     }
              //   }
              // },
              // {
              //   companyType: [0],//
              //   path: "giftvoucherallotement",
              //   outletType: [1, 2, 3],
              //   menuType: [0],
              //   data: {
              //     menu: {
              //       title: "Gift Voucher Allotment"
              //     }
              //   }
              // },
              // {
              //   companyType: [0],//
              //   path: "giftvouchercreation",
              //   outletType: [1, 2, 3],
              //   menuType: [0],
              //   data: {
              //     menu: {
              //       title: "Gift Voucher Pattern Creation"
              //     }
              //   }
              // },
              // {
              //   companyType: [0],//
              //   path: "couponcreation",
              //   outletType: [1, 2, 3],
              //   menuType: [0],
              //   data: {
              //     menu: {
              //       title: "Coupon Creation"
              //     }
              //   }
              // },
              // {
              //   companyType: [0],//
              //   path: "couponallotement",
              //   outletType: [1, 2, 3],
              //   menuType: [0],
              //   data: {
              //     menu: {
              //       title: "Coupon Allotment"
              //     }
              //   }
              // },
              // {
              //   companyType: [0],//
              //   path: "coupontouser",
              //   outletType: [1, 2, 3],
              //   menuType: [0],
              //   data: {
              //     menu: {
              //       title: "Coupon Issue"
              //     }
              //   }
              // },
              {
                companyType: [0],
                path: 'rePush',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Re-Push',
                  },
                },
              },
              {
                companyType: [0], //
                path: 'product-enquiry',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Product Enquiry',
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: 'purchases',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Purchase',

                selected: false,
                expanded: false,
                order: 4,
              },
            },
            children: [
              {
                companyType: [0],
                path: 'indent',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Indent',
                  },
                },
              },
              {
                companyType: [0],
                path: 'add-RFQ-order',
                outletType: [1, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'RFQ',
                  },
                },
              },
              {
                companyType: [0],
                path: 'indent-approval',
                outletType: [2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Indent Approval/Indent Delivery',
                  },
                },
              },
              {
                companyType: [0],
                path: 'supplier-response-detail',
                outletType: [1, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'supplier response detail',
                  },
                },
              },
              {
                companyType: [0],
                path: 'add-purchase-order',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Purchase Order',
                  },
                },
              },
              {
                companyType: [0],
                path: 'add-purchase-invoice',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Purchase Invoice',
                  },
                },
              },
              {
                companyType: [0],
                path: 'add-debitnote-itembase',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Purchase Return',
                  },
                },
              },
              {
                companyType: [0],
                path: 'transfer-in',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Inter Company Transfer In',
                  },
                },
              },
              {
                companyType: [0],
                path: 'purchase-order-delivery',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'PO Delivery',
                  },
                },
              },
              {
                companyType: [0],
                path: 'non-trading-item-purchase',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Non Trading Item Purchase',
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: 'inventory',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Inventory',
              },
            },
            children: [
              {
                companyType: [0],
                path: 'add-stock-issue',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Stock Issue',
                  },
                },
              },
              {
                companyType: [0],
                path: 'StockSettlementEntry',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Stock Settlement Entry',
                  },
                },
              },
              {
                companyType: [0],
                path: 'StockSettlementEntryApproval',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Stock Settlement Approval',
                  },
                },
              },

              {
                companyType: [0],
                path: 'openingstockentry',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Opening stock entry',
                  },
                },
              },
              {
                companyType: [0],
                path: 'branch-in',
                menuType: [0],
                outletType: [-1],
                data: {
                  menu: {
                    title: 'InterCompany Transfer In',
                  },
                },
              },
              {
                companyType: [0],
                menuType: [0],
                outletType: [-1],
                path: 'branch-out',
                data: {
                  menu: {
                    title: 'InterCompany Transfer Out',
                  },
                },
              },
              {
                companyType: [0],
                path: 'repackentry',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Repack Entry',
                  },
                },
              },
              {
                companyType: [0],
                path: 'itemsplit',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Item Split',
                  },
                },
              },
              {
                companyType: [0],
                path: 'item-opening-balance',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Item Opening Balance',
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: 'multiple-mobile-so',
            outletType: [-1],
            menuType: [3],
            data: {
              menu: {
                title: 'Multiple SO',
              },
            },
          },
          {
            companyType: [0],
            path: 'multipleproformatosi',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Proforma To Tax Invoice',
              },
            },
          },
          {
            companyType: [0],
            path: 'multiple-print',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Multiple Voucher Print',
              },
            },
          },
          {
            companyType: [0],
            path: 'production',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Production & Manufacturing Management',
              },
            },
            children: [
              {
                companyType: [0],
                path: 'bom',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'BOM Mapping',
                  },
                },
              },
              {
                companyType: [0],
                path: 'production-target',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Production Target',
                  },
                },
              },
              {
                companyType: [0],
                path: 'production-entry',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Production Entry',
                  },
                },
              },
              {
                companyType: [0],
                path: 'material-issue',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Material Issue',
                  },
                },
              },
              {
                companyType: [0],
                path: 'material-receipt',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Material Receipt',
                  },
                },
              },
              {
                companyType: [0],
                path: 'reports',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Reports',
                  },
                },
                children: [
                  {
                    companyType: [0],
                    path: 'pending-register',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Pending Register',
                      },
                    },
                  },
                ],
              },

              {
                companyType: [0],
                path: 'production-quality-check',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Production Quality Check',
                  },
                },
              },
            ],
          },
        ],
      },
      {
        companyType: [0],
        path: 'wms',
        menuType: [0],
        outletType: [1, 2, 3],
        data: {
          menu: {
            title: 'WMS',
            icon: 'fa fa-archive',
            selected: false,
            expanded: false,
            order: 1,
          },
        },
        children: [
          {
            companyType: [0],
            path: '',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Inbound',
                selected: false,
                expanded: false,
              },
            },
            children: [
              {
                companyType: [0],
                path: 'gate-pass',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Gate Pass',
                    selected: false,
                    expanded: false,
                  },
                },
              },
              {
                companyType: [0],
                path: 'mr',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'MR',
                    selected: false,
                    expanded: false,
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: '',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Outbound',
                selected: false,
                expanded: false,
              },
            },
            children: [
              // {
              //   path: "pickinglist",
              //   menuType: [0],
              //   data: {
              //     menu: {
              //       title: "Picking List"
              //     }
              //   }

              // },
              {
                companyType: [0],
                path: 'PickingListAssign',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'PickingList Assign',
                  },
                },
              },
              {
                companyType: [0],
                path: 'TrackReportPickingList',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Picking Confirm User Wise',
                  },
                },
              },
              {
                companyType: [0],
                path: 'PackingAssignUser',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Packing List Assign',
                  },
                },
              },

              {
                companyType: [0],
                path: 'TrackReportPackingList',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Packing Confirm User Wise',
                  },
                },
              },
              {
                companyType: [0],
                path: 'DispatchAssignUser',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Dispatch Assign User Wise',
                  },
                },
              },
              {
                companyType: [0],
                path: 'DispatchApprovedUserWise',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Dispatch Confirm User Wise',
                  },
                },
              },
            ],
          },
        ],
      },
      {
        companyType: [0],
        path: 'reports',
        menuType: [0],
        outletType: [1, 2, 3],
        data: {
          menu: {
            title: 'Report',
            icon: 'ion-ios-list-outline',
            selected: false,
            expanded: false,
            order: 1,
          },
        },

        children: [
          // {
          //   path: "test",
          //   data: {
          //     menu: {
          //       title: "Test",
          //       icon: "ion-android-people",
          //       selected: false,
          //       expanded: false,
          //       order: 1000
          //     }
          //   }

          // }
          {
            companyType: [0],
            path: '',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Inventory Reports',
                selected: false,
                expanded: false,
              },
            },
            children: [
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: '',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Analysis Reports',
                    selected: false,
                    expanded: false,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    path: 'item-ledger-report',

                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Item Ledger Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'closingStock',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Closing Stock Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'ClosingStockSummaryReport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Closing Stock Summary Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'SupplierWiseStock',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Supplier Wise Stock',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'ItemTransactionHistoryStandAlone',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Item Batch Register Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'ItemCorelationFilteredStandAlone',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Item Correlation Filtered Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'nonmovingitemreport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Non Moving Item Report',
                      },
                    },
                  },
                ],
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: '',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Stock Update Reports',
                    selected: false,
                    expanded: false,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'opening-stock-report',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Opening Stock',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'currentstockcategorywiseStandAlone',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Current Stock Category Wise Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'stockSettlementreport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Stock Settlement',
                      },
                    },
                  },
                ],
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: '',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Movement Reports',
                    selected: false,
                    expanded: false,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'TransactionReport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Transaction Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'STOCKISSUEREPORT',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Stock Issue Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'TransactionwiseStockReport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Transaction wise Stock Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'povsintransit',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'PO vs Intransit',
                      },
                    },
                  },
                ],
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: '',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Expire Reports',
                    selected: false,
                    expanded: false,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'itemexpiryreport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Item Expiry Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'agewiseexpiryReport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Agewise Expiry Report',
                      },
                    },
                  },
                ],
              },

              // Reports
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: 'partialsalesbill',
                menuType: [1],
                data: {
                  menu: {
                    title: 'Partial Sales Bill',
                  },
                },
              },

              //{
              // companyType: [0],
              //path: "closingstockcentral",
              // menuType: [15],
              // data: {
              //  menu: {
              //  title: "Closing Stock Central"
              // }
              // }
              //  },

              //{
              // companyType: [0],
              // path: "STOCKISSUEREPORTCENTRAL",
              // menuType: [0],
              // data: {
              //   menu: {
              //   title: "Stock Issue Central Report"
              // }
              //  }
              //},

              // {
              // companyType:[0],//
              // path: 'intransitreport',
              //   menuType: [0],
              //   data: {
              //     menu: {
              //       title: 'Intransit Report'
              //     }
              //   }
              // },
              // {
              // companyType:[0],//
              // path: 'delordstatusreport',
              //   menuType: [0],
              //   data: {
              //     menu: {
              //       title: 'Delivery Order Status Report'
              //     }
              //   }
              // },
              {
                companyType: [0],
                path: 'ordermestatus',
                menuType: [5],
                outletType: [-1],
                data: {
                  menu: {
                    title: 'Supplier Order Status Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'IndentVsReplenishedReport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Indent Vs Replenished Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'DeliveryStatusReport',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Delivery Status Report',
                  },
                },
              },

              {
                companyType: [0],
                path: 'ShortExpiryReport',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Short Expiry Report',
                  },
                },
              },

              // {
              // companyType:[0],//
              // path: "supplierstockreport",
              //outletType: [1,2,3],
              //   menuType: [0],
              //   data: {
              //     menu: {
              //       title: "Supplier Stock Report"
              //     }
              //   }
              // },

              // {
              // companyType:[0],//
              // path: "povspivsintransit",
              //   menuType: [0],
              //   data: {
              //     menu: {
              //       title: "PO VS PI VS INTRANSIT"
              //     }
              //   }
              // },
              {
                companyType: [0],
                path: 'transferin',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Transfer In Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'transferout',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Transfer Out Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'transaction-item-status',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Transaction Item Status Report',
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: '',
            menuType: [0],
            data: {
              menu: {
                title: 'Sales Reports',
                outletType: [1, 2, 3],
                selected: false,
                expanded: false,
                order: 1,
              },
            },
            children: [
              {
                companyType: [0],
                path: '',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Analysis',
                    outletType: [1, 2, 3],
                    selected: false,
                    expanded: false,
                    order: 1,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    path: 'dailysalesreport',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Daily Sales Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'StockandSalesItemSummary',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Stock & Sale Item Summary',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'salesRegisterReport',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Sales Register Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'billwiseitemsalesreport',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Bill Wise Item Sales Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'honeydatareport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Honey Data Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'matrixsalesinvoicereport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Matrix Sales Invoice Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'GROSSMARGINREPORT',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Gross Margin Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'GROSSMARGINREPORTMONTHWISE',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'MonthWise Gross Margin Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'MocWiseSales',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Moc Wise Sales Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'itemwisestockandsalessummary',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Item Stock Ledger Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'areasalesourstandinreport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Area Sales Outstanding Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'BESTBUYCUSTOMERREPORT',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Best Buy Customer Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'BESTBUYPRODUCTREPORT',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Best Buy Product  Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'hoursalesreport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Hour Sales Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'holdbillreport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Hold Bill Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'LoadSheetDetail',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Load Sheet detail Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'CUSTOMERITEMTRACKREPORT',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Customer Item Tracking  Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'customerwiseitemsales',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Customer Wise Item Sales Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'product-enquiry-report',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Product Enquiry Report',
                      },
                    },
                  },
                ],
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: '',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Cancel Reports',
                    selected: false,
                    expanded: false,
                    order: 1,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'salesbillcancelreport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Sales Bill Cancel Report',
                      },
                    },
                  },
                ],
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: '',
                menuType: [0],
                data: {
                  menu: {
                    title: 'GST Reports',
                    selected: false,
                    expanded: false,
                    order: 1,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'GstSalesSummaryTaxSlabReport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'GST Sales Summary Report',
                      },
                    },
                  },
                ],
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: '',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Proforma Reports',
                    selected: false,
                    expanded: false,
                    order: 1,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'proformadetailreport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Proforma Detail Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'proformasummaryreport',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Proforma Summary Report',
                      },
                    },
                  },
                ],
              },
              {
                companyType: [0],
                path: '',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Sales Order Reports',
                    selected: false,
                    expanded: false,
                    order: 1,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    path: 'salesorder',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Sales Order Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'salesordersummary',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Sales Order Summary',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'sovssi',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'SO VS SI Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'sovspi',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'SO VS PP Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'sovspo',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'SO VS PO Report',
                      },
                    },
                  },
                ],
              },
              {
                companyType: [0],
                path: '',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Sales Return Reports',
                    selected: false,
                    expanded: false,
                    order: 1,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    path: 'customerwisesalesreturnreport',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Customerwise Sales Return Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'salesreturnreport',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Sales Return Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'salesreturnsummary',
                    outletType: [1, 2, 3],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Sales Return Summary',
                      },
                    },
                  },
                ],
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: '',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Salesman Reports',
                    selected: false,
                    expanded: false,
                    order: 1,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'salesman',
                    menuType: [0],
                    isOnlyCentral: true,
                    data: {
                      menu: {
                        title: 'Sales Man',
                        selected: false,
                        expanded: false,
                      },
                    },
                  },
                ],
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: '',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Tender Reports',
                    selected: false,
                    expanded: false,
                    order: 1,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'dailycollectionreport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Daily Collection Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'monthlycollectionreport',
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Monthly Collection Report',
                      },
                    },
                  },
                ],
              },
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: '',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Transfer Out Reports',
                    selected: false,
                    expanded: false,
                    order: 1,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    outletType: [1, 2, 3],
                    path: 'transferoutcentralreport',
                    menuType: [15],
                    data: {
                      menu: {
                        title: 'Transfer Out Central Report',
                      },
                    },
                  },
                ],
              },
            ],
          },

          {
            companyType: [0],
            path: '',
            menuType: [0],
            outletType: [1],
            data: {
              menu: {
                title: 'Central Reports',
                selected: false,
                expanded: false,
                order: 1,
              },
            },
            children: [
              //   companyType: [0],
              //   path: 'FASTMOVINGPRODUCT',
              //   menuType: [15],
              //   data: {
              //     menu: {
              //       title: 'Fast Moving Product Central Report'
              //     }
              //   }
              // },
              // {
              //   companyType: [0],
              //   path: "currentstockitemwisesummarycentral",
              //   menuType: [15],
              //   data: {
              //     menu: {
              //       title: "Current Stock Itemwise Summary Central Report Filter"
              //     }
              //   }
              // },
              // {
              //   companyType: [0],
              //   path: "ClosingStockSummaryReportCentral",
              //   menuType: [15],
              //   data: {
              //     menu: {
              //       title: "Closing Stock Summary Report Central"
              //     }
              //   }
              // },
              {
                companyType: [0],
                path: '',
                menuType: [0],
                outletType: [1],
                data: {
                  menu: {
                    title: 'Sales Reports',
                    selected: false,
                    expanded: false,
                    order: 1,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    path: 'salesordersummarycentral',
                    outletType: [1],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Sales Order Summary Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'salesordercentral',
                    outletType: [1],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Sales Order Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'HourSalesCentralReport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Hourly Sales Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'SALESRETURNREPORTCENTRAL',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Sales Return Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'itemwisesalescentralreport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Item  Wise Sales Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'itemwisecategorysalescentralreport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Category Wise Sales Summary Central',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'dailycollectioncentralreport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Daily Collection Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'monthlycollectioncentralreport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Monthly Collection Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'BillWiseItemWiseSalesCentralReport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Bill Wise Item Wise Sales Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'SalesItemWiseSummaryCentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Sales Item Wise Summary Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'CategoryStockItemWiseSalesCentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Category Wise Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'HourlySalesItemwiseCentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Hourly Item Wise Sales Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'dailysalescentralreport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Daily Sales Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'gstbreakupwisecentralreport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Gst Breakup Wise Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'CustomerSalesFrequencyCentralReport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Customer Frequency Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'STOCKISSUEREPORTCENTRAL',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Stock Issue Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'StockandSalesCategorySummary',
                    menuType: [15],
                    data: {
                      menu: {
                        title: 'Stock & Sale Category Summary',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'StockandSalesItemSummaryCentral',
                    menuType: [15],
                    data: {
                      menu: {
                        title: 'Stock & Sale Item Summary Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'SalesVsGRNAnalysis',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Sales Vs GRN Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'PushSalesItemList',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Push Sales Item List Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'ItemSalesHistory',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Item Sales History Central Report',
                      },
                    },
                  },
                ],
              },
              {
                companyType: [0],
                path: '',
                menuType: [0],
                outletType: [1],
                data: {
                  menu: {
                    title: 'Purchase Reports',
                    selected: false,
                    expanded: false,
                    order: 1,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    path: 'PurchaseSummaryCategoryReportCentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Purchase Summary Category Report Central',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'IndentCentralReport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Indent Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'IndentVsReplenishmentCentralReport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Indent Vs Replenishment Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'purchaseRegisterReportCentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Purchase Register Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'materialreceiptcentralreport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Material Receipt Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'MRvsPIReportCentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'MR vs PI Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'IndentVSPOReportCentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Indent VS PO Report Central',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'POVSMRReportCentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'PO vs MR Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'purchaseinvoicedetailcentralreport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Purchase Invoice Detail Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'purchaseordercentraldetailreport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Purchase Order Detail Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'POvsPICentralReport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Po vs PI Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'ExpectedPOVsActualPurchase',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Expected PO Vs Actual Purchase Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'SuggestedPOQtybasedonlastdaySale',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title:
                          'Suggested PO Qty based on lastday Sale Central Report',
                      },
                    },
                  },
                ],
              },
              {
                companyType: [0],
                path: '',
                menuType: [0],
                outletType: [1],
                data: {
                  menu: {
                    title: 'Analysis Reports',
                    selected: false,
                    expanded: false,
                    order: 1,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    path: 'FastMovingOutletWise',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Fast Moving Item Wise Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'SlowMovingOutletWise',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Slow Moving Item Wise Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'ItemCorelation',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Item Correlation Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'ItemCorelationFiltered',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Item Correlation Filtered Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'SLOWBUYPRODUCTREPORT',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Slow Buy Product Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'BestBuyProductReportCentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Best Buy Product Report Central',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'auditcentral-report',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Audit Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'ItemTransactionHistory',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Item Transaction History Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'UserLoginDetailsCentralReport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'User Login Details Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'ManualOrBarcodeReportCentralReport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Manual Or Barcode Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'TargetsVsOutletsCentralReport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Target Or Outlet Central Report',
                      },
                    },
                  },
                ],
              },
              {
                companyType: [0],
                path: '',
                menuType: [0],
                outletType: [1],
                data: {
                  menu: {
                    title: 'Inventory Reports',
                    selected: false,
                    expanded: false,
                    order: 1,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    path: 'currentstockcategorywisecentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Current Stock Category Wise Report Central',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'itemexpiryreportcentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Item Expiry Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'OpeningStockCentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Opening Stock Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'AvailableStockForDay',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Available Stock For Day Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'transferincentralreport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Transfer In Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'transferoutcentralreport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Transfer Out Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'TransferInIntransitCentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Transfer In Intransit Central',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'closingstockcentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Current Stock Item Summary Central',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'StockSettlementReportCentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Stock Settlement Report Central',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'currentstockitemwisecentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Current Stock Item Detail Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'ShortExpiryReportCentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Short Expiry Central Report',
                      },
                    },
                  },
                ],
              },
              {
                companyType: [0],
                path: '',
                menuType: [0],
                outletType: [1],
                data: {
                  menu: {
                    title: 'Promotional Reports',
                    selected: false,
                    expanded: false,
                    order: 1,
                  },
                },
                children: [
                  {
                    companyType: [0],
                    path: 'customerwiseloyaltycentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Customer Wise Loyalty Central',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'customerwisedetailloyaltycentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Customer Wise Detail Loyalty Central',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'couponcreationreportcentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Coupon Creation Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'couponmasterreportcentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Coupon Master Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'coupondiscountreceivedreportcentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Coupon Discount Received Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'couponcreationreportsummarycentral',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Coupon Creation Summary Central Report',
                      },
                    },
                  },
                  {
                    companyType: [0],
                    path: 'OfferManagementReport',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Offer Management Report',
                      },
                    },
                  },
                ],
              },
            ],
          },
          {
            companyType: [0],
            path: '',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Purchase Reports',
                selected: false,
                expanded: false,
                order: 1,
              },
            },
            children: [
              {
                companyType: [0],
                path: 'purchaseinvoicedetailreport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Purchase Invoice Detail Report',
                  },
                },
              },

              {
                companyType: [0],
                path: 'materialreceiptreport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Material Receipt Report',
                  },
                },
              },

              {
                companyType: [0],
                path: 'MRvsPIReport',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'MR vs PI Report',
                  },
                },
              },

              {
                companyType: [0],
                path: 'POvsSOReport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'PO vs SO Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'honeydatapurchasereport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Honey Purchase Data',
                  },
                },
              },
              {
                companyType: [0],
                path: 'IndentReport',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Indent Report',
                  },
                },
              },

              {
                companyType: [0],
                path: 'IndentVSPOReport',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Indent VS PO Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'IndentVSTIReport',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Indent VS TI Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'purchaseorderdetailreport',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Purchase Order Detail Report',
                  },
                },
              },

              //{
              //companyType: [0],
              //path: 'materialreceiptcentralreport',
              //menuType: [15],
              // data: {
              // menu: {
              //title: 'Material Receipt Central Report'
              //  }
              // }
              //},
              // {
              // companyType: [0],
              //path: 'purchaseorderdetailreport',
              //menuType: [0],
              //data: {
              //menu: {
              //title: 'Purchase Order Detail Report'
              //}
              //}
              //},
              // {
              // companyType: [0],
              //path: 'purchaseordercentraldetailreport',
              //menuType: [0],
              //data: {
              //menu: {
              //title: 'Purchase Order Detail Central Report'
              //}
              //}
              //},

              {
                companyType: [0],
                path: 'purchasereturnreport',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Purchase Return Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'purchaseordersummary',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Purchase Order Summary',
                  },
                },
              },
              {
                companyType: [0],
                path: 'POVSMRReport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'PO VS MR Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'purchasesummary',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Purchase Summary',
                  },
                },
              },
              {
                companyType: [0],
                path: 'purchaseRegisterReport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Purchase Register',
                  },
                },
              },
              {
                companyType: [0],
                path: 'purchaseReturnSummaryReport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Purchase Return Summary Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'GSTPurchaseSummaryTaxSlabReport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'GST Purchase Summary Tax Slab Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'POvsPIReport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Po vs PI Report',
                  },
                },
              },
              // {
              // companyType: [0],
              //path: 'POvsPICentralReport',
              //menuType: [15],
              //data: {
              //menu: {
              //title: 'Po vs PI Central Report'
              //}
              //}
              //},
              {
                companyType: [0],
                path: 'PRvsSRreport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'PR vs SR Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'purchaseMonthlyReport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Purchase Monthly Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'purchaseMonthlywiseSummaryReport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Purchase - Month Wise Summary',
                  },
                },
              },
            ],
          },

          {
            companyType: [0],
            path: '',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Master Report',
                selected: false,
                expanded: false,
                order: 1,
              },
            },
            children: [
              {
                companyType: [0],
                path: 'erppireport',
                menuType: [1, 5],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'ERP PI REPORT',
                  },
                },
              },
              {
                companyType: [0],
                path: 'erpsireport',
                outletType: [1, 2, 3],
                menuType: [1, 5],
                data: {
                  menu: {
                    title: 'ERP SI REPORT',
                  },
                },
              },
              // {
              // companyType:[0],//
              // path: 'itemwisechannelmarginreport',
              //   menuType: [0],
              //   data: {
              //     menu: {
              //       title: 'Itemwise Channel Margin Report'
              //     }
              //   }
              // },
              {
                companyType: [0],
                path: 'itemMasterreport',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Item Master',
                  },
                },
              },
              {
                companyType: [0],
                path: 'ItemVsBarcodeMaster',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Item Vs Barcode Master',
                  },
                },
              },
              {
                companyType: [0],
                path: 'PRICELIST',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Price List',
                  },
                },
              },
              {
                companyType: [0],
                path: 'LOYALTYREPORT',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Loyalty Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'loyaltymasterreport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Loyalty Master Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'CustomerMasterReport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Customer Master Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'OUTLETLIST',
                menuType: [0],
                outletType: [1],
                data: {
                  menu: {
                    title: 'OUTLET LIST',
                  },
                },
              },
              {
                companyType: [0],
                path: 'salesmanecoreport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Salesman & ECO Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'nontransactedpartyreport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Non Transacted Customer Report',
                  },
                },
              },

              {
                companyType: [0],
                path: 'SCHEMEMASTER',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Scheme Master',
                  },
                },
              },
              {
                companyType: [0],
                path: 'partyageoutstandingreconcillation',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Party Age Outstanding Reconciliation Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'customerbillreminderreport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Customer Bill Reminder Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'mrp-change-report',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'MRP Change Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'audit-report',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Audit Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'itemSchemeMasterreport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Item Scheme Master',
                  },
                },
              },
              {
                path: 'schemereport',
                companyType: [0],
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Scheme Report',
                  },
                },
              },
              // {
              // companyType:[0],//
              // path: 'claimreport',
              //   menuType: [0],
              //   data: {
              //     menu: {
              //       title: 'Claim Report'
              //     }
              //   }
              // },
              {
                companyType: [0],
                path: 'combopackconfigreport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Combo Pack Configuration.',
                  },
                },
              },
              {
                companyType: [0],
                path: 'claimandexpiryreport',
                menuType: [2, 3, 6, 7],
                outletType: [-1],
                data: {
                  menu: {
                    title: 'Claim & Expiry Report',
                  },
                },
              },
              {
                path: 'autodebitnoteraisedreport',
                companyType: [0],
                menuType: [1],
                outletType: [-1],
                data: {
                  menu: {
                    title: 'Auto DebitNote Raised Report',
                  },
                },
              },
              {
                path: 'erpSalesReturnReport',
                companyType: [0],
                menuType: [1, 5],
                outletType: [-1],
                data: {
                  menu: {
                    title: 'ERP Sales Return Report',
                  },
                },
              },
              {
                path: 'erpPurchaseReturnReport',
                companyType: [0],
                menuType: [1, 5],
                outletType: [-1],
                data: {
                  menu: {
                    title: 'ERP Purchase Return Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'crateReport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Crate Report',
                  },
                },
              },
              {
                path: 'offlinesyncreport',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Offline Sync Report',
                  },
                },
              },
              {
                companyType: [0],
                path: 'couponReport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Coupon Report.',
                  },
                },
              },
              {
                companyType: [0],
                path: 'couponmasterreport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Coupon Master Report.',
                  },
                },
              },
              {
                companyType: [0],
                path: 'priceLevelManagerReport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Price Level Manager Report.',
                  },
                },
              },
              {
                companyType: [0],
                path: 'billsequencereport',
                outletType: [1],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Skipped Sequence Report',
                  },
                },
              },
            ],
          },
          // {
          //   companyType: [0],
          //   path: "",
          //   menuType: [0],
          //   data: {
          //     menu: {
          //       title: "BI & MIS",
          //       selected: false,
          //       expanded: false,
          //       order: 1
          //     }
          //   },
          //   children: [

          //     {
          //       companyType: [0],
          //       path: 'outlettracking',
          //       menuType: [0],
          //       data: {
          //         menu: {
          //           title: 'Outlet Tracking Report'
          //         }
          //       }
          //     },
          //   ]
          // },

          {
            companyType: [0],
            path: '',
            menuType: [1],
            outletType: [-1],
            data: {
              menu: {
                title: 'OrderApp Report',
                selected: false,
                expanded: false,
                order: 1,
              },
            },
            children: [
              {
                companyType: [0],
                path: 'soerrorlogreport',
                menuType: [1],
                outletType: [-1],
                data: {
                  menu: {
                    title: 'Sales Order Error Log',
                  },
                },
              },
              {
                companyType: [0],
                path: 'ordertransfer',
                menuType: [0],
                outletType: [-1],
                data: {
                  menu: {
                    title: 'Order Transfer',
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: '',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Fav report',
                selected: false,
                expanded: false,
                order: 1,
              },
            },
            children: [
              {
                companyType: [0],
                path: 'itemMasterreport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Item Master',
                  },
                },
              },
              {
                companyType: [0],
                path: 'PRICELIST',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Price List',
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: 'feedbackReport',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Feedback report',
                selected: false,
                expanded: false,
                order: 1,
              },
            },
          },
        ],
      },
      {
        companyType: [0],
        path: 'sms',
        menuType: [0],
        outletType: [1, 2, 3],
        data: {
          menu: {
            title: 'SMS',
            icon: 'fa fa-commenting-o',
            selected: true,
            expanded: false,
            order: 0,
          },
        },
        children: [
          {
            companyType: [0],
            path: '',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Quick',
                selected: false,
                expanded: false,
              },
            },

            children: [
              // {
              //   companyType: [0],
              //   path: "quick-message",
              //   menuType: [0],
              //   data: {
              //     menu: {
              //       title: "Quick Message",
              //       selected: false,
              //       expanded: false
              //     }
              //   }
              // },
              {
                companyType: [0],
                path: 'quick-email',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Quick Email',
                    selected: false,
                    expanded: false,
                  },
                },
              },
            ],
          },

          // {
          //   companyType: [0],
          //   path: "",
          //   menuType: [0],
          //   data: {
          //     menu: {
          //       title: "Master",
          //       selected: false,
          //       expanded: false
          //     }
          //   },

          //   children: [
          //     {
          //       companyType: [0],
          //       path: "outlet-master",
          //       menuType: [0],
          //       data: {
          //         menu: {
          //           title: "Outlet Master",
          //           selected: false,
          //           expanded: false
          //         }
          //       }
          //     },
          //     {
          //       companyType: [0],
          //       path: "category-master",
          //       menuType: [0],
          //       data: {
          //         menu: {
          //           title: "Category Master",
          //           selected: false,
          //           expanded: false
          //         }
          //       }
          //     }

          //   ]
          // },
          {
            companyType: [0],
            path: '',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Schedule',
                selected: false,
                expanded: false,
              },
            },
            children: [
              {
                companyType: [0],
                path: 'schedule-message',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Schedule Message',
                    selected: false,
                    expanded: false,
                  },
                },
              },
              {
                companyType: [0],
                path: 'quick-schedule-msg',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Quick Message Scheduler',
                    selected: false,
                    expanded: false,
                  },
                },
              },
              {
                companyType: [0],
                path: 'quick-schedule-email',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Quick Email Scheduler',
                    selected: false,
                    expanded: false,
                  },
                },
              },
              {
                companyType: [0],
                path: 'reportscheduler',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Report Scheduler',
                    selected: false,
                    expanded: false,
                  },
                },
              },
              {
                companyType: [0],
                path: 'reportschedulerlisting',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Report Scheduler List',
                    selected: false,
                    expanded: false,
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: '',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Customize Template',
                selected: false,
                expanded: false,
              },
            },
            children: [
              {
                companyType: [0],
                outletType: [1, 2, 3],
                path: 'custom-message',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Customize Message',
                    selected: false,
                    expanded: false,
                  },
                },
              },
              {
                companyType: [0],
                path: 'custom-email',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Customize Email',
                    selected: false,
                    expanded: false,
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: '',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Reports',
                selected: false,
                expanded: false,
              },
            },
            children: [
              {
                companyType: [0],
                path: 'messageReport',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Get All Report',
                    selected: false,
                    expanded: false,
                  },
                },
              },
              {
                companyType: [0],
                path: 'email-delivery',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Email Delivery Details',
                    selected: false,
                    expanded: false,
                  },
                },
              },
              {
                companyType: [0],
                path: 'whatsapp-delivery',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Whatsapp Delivery Details',
                    selected: false,
                    expanded: false,
                  },
                },
              },
              {
                companyType: [0],
                path: 'sms-failed',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'SMS Failed Details',
                    selected: false,
                    expanded: false,
                  },
                },
              },
              {
                companyType: [0],
                path: 'email-failed',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Email Failed Details',
                    selected: false,
                    expanded: false,
                  },
                },
              },
              {
                companyType: [0],
                path: 'whatsapp-failed',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Whatsapp Failed Details',
                    selected: false,
                    expanded: false,
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: '',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Configuration',
                selected: false,
                expanded: false,
              },
            },
            children: [
              {
                companyType: [0],
                path: 'domainConfiguration',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Domain Configuration',
                    selected: false,
                    expanded: false,
                  },
                },
              },
              {
                companyType: [0],
                path: 'emp-template',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Customer Mail Configuration',
                    selected: false,
                    expanded: false,
                  },
                },
              },
            ],
          },
        ],
      },
      // {
      //   // path: "masters",
      // companyType:[0],//
      // path: "multibusiness",
      //   menuType: [0],
      //   data: {
      //     menu: {
      //       title: "Multi Business",
      //       icon: "fa fa-usd"
      //     }
      //   }, children: [
      //     {
      //       path: "test",
      //       data: {
      //         menu: {
      //           title: "Test",
      //           icon: "ion-android-people",
      //           selected: false,
      //           expanded: false,
      //           order: 1000
      //         }
      //       }

      //     }]
      // },
      {
        // path: "masters",
        companyType: [0],
        path: 'account',
        menuType: [0],
        outletType: [1, 2, 3],
        data: {
          menu: {
            title: 'Financial Account',
            icon: 'fa fa-inr',
          },
        },
        children: [
          {
            path: 'test',
            data: {
              menu: {
                title: 'Test',
                icon: 'ion-android-people',
                selected: false,
                expanded: false,
                order: 1000,
              },
            },
          },
        ],
      },
      {
        companyType: [0],
        path: 'configuration',
        menuType: [0],
        outletType: [1, 2, 3],
        data: {
          menu: {
            title: 'Configuration',
            icon: 'ion-gear-b',
            selected: false,
            expanded: false,
            order: 2,
          },
        },
        children: [
          {
            companyType: [0],
            path: 'org-master',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Organisation Master',
                selected: false,
                expanded: false,
                order: 90,
              },
            },
            children: [
              {
                companyType: [0],
                path: 'company-info',
                menuType: [0],
                outletType: [1, 2, 3],
                isOnlyCentral: false,
                data: {
                  menu: {
                    title: 'Company Info',
                  },
                },
              },
              {
                companyType: [0],
                path: 'warehouse',
                menuType: [0],
                outletType: [1, 2, 3],
                isOnlyCentral: false,
                data: {
                  menu: {
                    title: 'Warehouse',
                    selected: false,
                    expanded: false,
                  },
                },
              },
              {
                companyType: [0],
                path: 'zone-master',
                outletType: [1],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Zone Master',
                  },
                },
              },
              {
                companyType: [0],
                outletType: [1],
                path: '',
                menuType: [0],
                data: {
                  menu: {
                    title: 'Region Master',
                    selected: false,
                    expanded: false,
                  },
                },
                children: [
                  {
                    companyType: [0], //
                    path: 'areamaster',
                    menuType: [0],
                    outletType: [1],
                    data: {
                      menu: {
                        title: 'Area Master',
                      },
                    },
                  },

                  {
                    companyType: [0], //
                    path: 'zone-master-region',
                    outletType: [1],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Zone Master',
                      },
                    },
                  },
                  // },
                  {
                    companyType: [0], //
                    path: 'regionmaster',
                    outletType: [1],
                    menuType: [0],
                    data: {
                      menu: {
                        title: 'Region Master',
                      },
                    },
                  },
                ],
              },
            ],
          },

          {
            companyType: [0],
            path: 'userManager',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'User Manager',
                selected: false,
                expanded: false,
                order: 90,
              },
            },
            children: [
              {
                companyType: [0],
                path: 'rolelist',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Role List',
                  },
                },
              },
              {
                companyType: [0],
                path: 'userlist',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'User List',
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: 'master-migration',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Master Migration',
              },
            },
          },
          {
            companyType: [0],
            path: 'scheme-setting',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Scheme Setting',
              },
            },
          },
          // {
          // companyType:[0],//
          // path: "normsetting",
          //   menuType: [],
          //   data: {
          //     menu: {
          //       title: "Norms Setting"
          //     }
          //   }
          // },
          {
            companyType: [0],
            path: 'scheme',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Scheme Master',
                selected: false,
                expanded: false,
              },
            },
            children: [
              {
                companyType: [0],
                path: 'schemeList',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Scheme',
                  },
                },
              },
              {
                companyType: [0],
                path: 'scheduleTable',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Schedule',
                  },
                },
              },
              {
                companyType: [0],
                path: 'schemebudgetlist',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Scheme Vs Budget Master',
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: 'datamigrationgof',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Inventory Migration',
              },
            },
          },
          {
            companyType: [0],
            path: 'invoicing-finance',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Invoicing & Finance',
                selected: false,
                expanded: false,
                order: 90,
              },
            },
            children: [
              {
                companyType: [0],
                path: 'EwayUpdate',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Eway Update',
                  },
                },
              },
              {
                companyType: [0],
                path: 'einvoice',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'E-Invoice',
                  },
                },
              },
              // {
              // companyType:[0],//
              // path: "BankFinanceQuery",
              //   menuType: [0],
              //   data: {
              //     menu: {
              //       title: "Bank Finance Query"
              //     }
              //   }
              // },
            ],
          },
          {
            companyType: [0],
            path: 'settings',
            menuType: [0],
            outletType: [1, 2, 3],
            data: {
              menu: {
                title: 'Settings',
                icon: 'ion-gear-b',
                selected: false,
                expanded: false,
                order: 90,
              },
            },
            children: [
              {
                companyType: [0],
                path: 'appconfiguration',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'App configuration',
                  },
                },
              },
              {
                companyType: [0],
                path: 'PageWiseControl',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Page Wise Control',
                  },
                },
              },
              {
                companyType: [0],
                path: 'ControlAccessPageWise',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Control Access Page Wise',
                  },
                },
              },
              {
                companyType: [0],
                path: 'devicesetting',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Print Setting',
                  },
                },
              },
              {
                companyType: [0],
                path: 'supplieritemcodevsbpositemcode',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Supplier Item Code Vs BPOS Item Code',
                  },
                },
              },
              {
                companyType: [0],
                path: 'salesmancustomerwiseitemcodevsbpositemcode',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Salesman/Customer Item Code Vs BPOS Item Code',
                  },
                },
              },
              {
                companyType: [0],
                path: 'itemwisediscountmapping',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Item wise discount settings',
                  },
                },
              },
              {
                companyType: [0],
                path: 'eancode',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'EAN Code Management',
                  },
                },
              },
              {
                companyType: [0],
                path: 'bar-code',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Barcode Settings',
                  },
                },
              },
              {
                companyType: [0],
                path: 'customer-label-print',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Customer Label Print',
                  },
                },
              },
              {
                companyType: [0],
                path: 'config-bar-code',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Configuration Barcode',
                  },
                },
              },
              // {
              //   companyType: [0],
              //   path: "barcodeMapping",
              //   menuType: [0],
              //   data: {
              //     menu: {
              //       title: "Barcode Mapping"
              //     }
              //   }
              // },
              {
                companyType: [0],
                path: 'beatvsminlist',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Beat Vs Min Amount',
                  },
                },
              },
              {
                companyType: [0],
                path: 'prefixsetting',
                outletType: [1, 2, 3],
                menuType: [0],
                data: {
                  menu: {
                    title: 'Sales Prefix Setting',
                  },
                },
              },
              {
                companyType: [0],
                path: 'digitalSignature',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Digital Signature',
                  },
                },
              },
              {
                companyType: [0],
                path: 'emailsetting',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Email Setting',
                  },
                },
              },
              {
                companyType: [0],
                path: 'passwordchange',
                menuType: [1],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Password Change',
                  },
                },
              },
              {
                companyType: [0],
                path: 'iconsetting',
                menuType: [0],
                outletType: [1, 2, 3],
                data: {
                  menu: {
                    title: 'Icon Setting',
                  },
                },
              },
            ],
          },
          {
            companyType: [0],
            path: 'outlet-configuration',
            menuType: [0],
            outletType: [1],
            data: {
              menu: {
                title: 'Outlet Configuration',
              },
            },
          },
        ],
      },
    ],
  },
];
export type x = {
  companyType: string;
  path: string;
  menuType: string;
  outletType: string;
  data: string;
  childrenIds: string;
  isOnlyCentral: boolean;
  id: number;
};
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  outputlist: x[] = [
    {
      companyType: '',
      path: '',
      menuType: '',
      outletType: '',
      data: '',
      childrenIds: '',
      isOnlyCentral: false,
      id: 0,
    },
  ];
  id = 1;

  constructor() {
    //this.recursive_fun(PAGES_MENU[0]);
  }

  recursive_fun(obj) {
    let obj2: x = {
      companyType: '',
      path: '',
      menuType: '',
      outletType: '',
      data: '',
      childrenIds: '',
      isOnlyCentral: false,
      id: 0,
    };
    while (obj != null) {
      if (obj.companyType != undefined) {
        obj.companyType.forEach((c) => {
          obj2.companyType = c + ',';
        });
        obj2.companyType.trim();
      }
      if (obj.menuType != undefined) {
        obj.menuType.forEach((c) => {
          obj2.menuType = c + ',';
        });
        obj2.menuType.trim();
      }
      if (obj.outletType != undefined) {
        obj.outletType.forEach((c) => {
          obj2.outletType = c + ',';
        });
        obj2.outletType.trim();
      }

      obj2.path = obj.path;
      obj2.data = obj.data;
      if (obj.isOnlyCentral != undefined && obj.isOnlyCentral != null) {
        obj2.isOnlyCentral = obj.isOnlyCentral;
      }
      if (
        obj.children != undefined &&
        obj.children != null &&
        obj.children.length > 0
      ) {
        for (let child of obj.children) {
          this.recursive_fun(child);
        }
      }
    }
  }
}
