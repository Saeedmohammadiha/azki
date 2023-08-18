type CarModel = { id: number; title: string };

type Car = {
  id: number;
  title: string;
  usages: CarModel[];
};

type Insurance = {
  id: number;
  title: string;
  satisfaction: number;
  wealthLevel: number;
  complaintResponseTime: number;
  branchNumber: number;
  enable: boolean;
  marketerEnable: boolean;
  available: boolean;
  maxBranchDiscount: number;
  branchDiscountPercent: number;
  maxCompanyDiscount: number;
  companyDiscountPercent: number;
  maxBimitoDiscount: number;
  bimitoDiscountPercent: number;
  maxMarketerDiscount: number;
  marketerDiscountPercent: number;
  bimitoDiscountTitle: string;
  azkiDiscountTitle: string;
  hideDiscount: boolean;
  description: string;
  productDescription: string;
  giftTitle: string;
  hasGift: boolean;
  onlineDamage: boolean;
  features: [
    {
      icon: string;
      title: string;
      newRelease: boolean;
      description: string;
    }
  ];
  installments: [
    {
      enable: boolean;
      enableForSellers: boolean;
      installments: [{ percent: number; month: number }];
      title: string;
      label: string;
      description: string;
      type: number;
      default: boolean;
    }
  ];
  icon: string;
  helpIcons: [
    {
      title: string;
      url: string;
    },
    {
      title: string;
      url: string;
    }
  ];
  oldVehicleAge: number;
  oldVehiclePercent: number;
  oldVehiclePenaltyPercent: number;
  extraPercent: number;
  extraPenaltyPercent: number;
  damagedShortTermEnable: boolean;
  maxDayOfPenalty: number;
  forgivenessDescription: string;
  enableExpireDatePayment: boolean;
  shortPenaltyForgiveness: boolean;
  longPenaltyForgiveness: boolean;
  cashPayment: boolean;
  azkiPenaltyDiscountEnable: boolean;
  maxAzkiPenaltyDiscount: number;
};

type Discount = { id: number; title: string };

type DialogData = {
  data: {
    name: string;
    lastName: string;
    mobile: string;
    password: string;
  };
  selectedCarModel: CarModel;
  selectedCartype: Car;
  selectedCompany: Insurance;
  selectedDriver: Discount;
  selectedThirdParty: Discount;
};

