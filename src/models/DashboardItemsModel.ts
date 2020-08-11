import { DoctorModel } from "./DoctorModel";
import { AppointmentModel } from "./AppointmentModel";
import { CampaignModel } from "./CampaignModel";
import { DepartmentModel } from "./DepartmentModel";
import { AdoptionModel } from "./AdoptionModel";

export type DashboardItemsModel = {
  appointment: AppointmentModel;
  campaigns: CampaignModel[];
  doctors: DoctorModel[];
  departments: DepartmentModel[];
  adoptions: AdoptionModel[];
};
