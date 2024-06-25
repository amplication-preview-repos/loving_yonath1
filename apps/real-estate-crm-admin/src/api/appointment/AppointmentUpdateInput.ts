import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  property?: PropertyWhereUniqueInput | null;
  status?: "Option1" | null;
  time?: Date | null;
};
