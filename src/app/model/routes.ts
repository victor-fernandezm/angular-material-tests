export class SidenavRoute {
    private _route: string;
    public get route(): string {
        return this._route;
    }
    public set route(value: string) {
        this._route = value;
    }

    private _title: string;
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    
    private _icon: string | undefined;
    public get icon(): string | undefined {
        return this._icon;
    }
    public set icon(value: string | undefined) {
        this._icon = value;
    }
    
    private _iconFontSet: string;
    public get iconFontSet(): string {
        return this._iconFontSet;
    }
    public set iconFontSet(value: string) {
        this._iconFontSet = value;
    }

    constructor(route: string, title: string, icon?: string, iconFontSet: string = "") {
        this._route = route;
        this._title = title;
        this._icon = icon;
        this._iconFontSet = iconFontSet;
    }
}
