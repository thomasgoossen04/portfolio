export interface Education {
    institution: string;
    degree: string;
    field: string;
    startDate: Date;
    endDate?: Date | null;
    location: string;
}