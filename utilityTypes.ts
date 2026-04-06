type employStatus = "Available" | "Not Available";

interface companyUser {
    id: number,
    name: string,
    designation: string,
    joinDate: number
    status: employStatus
};

const allCompanyUser: companyUser[] = [
    {
        id: 1,
        name: "Sabbir",
        designation: "employ",
        joinDate: 14082026,
        status: "Available"
    },
    {
        id: 2,
        name: "Abir",
        designation: "employ",
        joinDate: 14082026,
        status: "Available"
    },
    {
        id: 3,
        name: "Sakil",
        designation: "employ",
        joinDate: 14082026,
        status: "Not Available"
    },
    {
        id: 4,
        name: "Billal",
        designation: "employ",
        joinDate: 14082026,
        status: "Available"
    }
]

type partialUser = Partial<companyUser>







