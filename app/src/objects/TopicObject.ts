export default class TopicObject {
    private _title: string;
    private _description: string;
    private _subject: string;
    private _id: number;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get subject(): string {
        return this._subject;
    }

    set subject(value: string) {
        this._subject = value;
    }

    constructor(tile: string, description: string, subject: string) {
        this._title = tile;
        this._description = description;
        this._subject = subject;
    }
}