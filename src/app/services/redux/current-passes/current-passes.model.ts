export interface CurrentPassesState {
    isLoading: boolean;
    errors: string[];

    passes: CurrentPass[];
}

export interface CurrentPass {
    name: string;
    expiryDate: Date;
    remainingClips?: number;
}
