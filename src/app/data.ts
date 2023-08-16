export interface RootData {
  employees: Employee[];
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  contactInfo: ContactInfo;
  skills: string[];
  projects: Project[];
}

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  link: string;
}

export class Data {
  data = `{
    "employees": [
    {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "position": "Software Engineer",
    "department": "development",
    "contactInfo": {
    "email": "john.doe@example.com",
    "phone": "+1 (123) 456-7890"
    },
    "skills": ["JavaScript", "Angular", "Node.js"],
    "projects": [
    {
    "id": "proj123",
    "name": "Customer Portal",
    "description": "Developing a customer portal using Angular.",
    "link": "/projects/proj123"
    }
    ]
    },
    {
    "id": 2,
    "firstName": "Jane",
    "lastName": "Smith",
    "position": "UI/UX Designer",
    "department": "Design",
    "contactInfo": {
    "email": "jane.smith@example.com",
    "phone": "+1 (234) 567-8901"
    },
    "skills": ["UI/UX Design", "Adobe XD", "Sketch"],
    "projects": [
    {
    "id": "proj456",
    "name": "Mobile App Redesign",
    "description": "Redesigning the mobile app user interface.",
    "link": "/projects/proj456"
    }
    ]
    },
    {
      "id": 2,
      "firstName": "Vraj",
      "lastName": "Patel",
      "position": "Angular",
      "department": "development",
      "contactInfo": {
      "email": "jane.smith@example.com",
      "phone": "+1 (234) 567-8901"
      },
      "skills": ["UI/UX Design", "Adobe XD", "Sketch"],
      "projects": [
      {
      "id": "proj456",
      "name": "Mobile App Redesign",
      "description": "Redesigning the mobile app user interface.",
      "link": "/projects/proj456"
      }
      ]
      }
    ]
    }`;
}
