export interface Message {
    id: string; //unique
    createdDate: string; //mandatory, set automatically
    createdTime: string; //mandatory, set automatically
    createdBy: string;//mandatory, set automatically
    message: string;//mandatory
    courseId:string;//mandatory
}
