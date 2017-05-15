export interface CurrentPassesModel {
    isLoading: boolean;
    hasErrored: boolean;
    passes: PassModel[];
}

export interface PassModel {
    name: string;
    expiryDate: Date;
    remainingClips?: number;
}
