export declare const useInputValAndError: <T = any>(name: string, directDefaultValue?: T | undefined) => {
    error: Record<string, any> | null;
    formState: {
        isLoading: boolean;
        isSubmitSuccessful: boolean;
        isSubmitted: boolean;
        isSubmitting: boolean;
        submitCount: number;
    };
    watch: import("react-hook-form").UseFormWatch<import("react-hook-form").FieldValues>;
    getValues: import("react-hook-form").UseFormGetValues<import("react-hook-form").FieldValues>;
    getFieldState: import("react-hook-form").UseFormGetFieldState<import("react-hook-form").FieldValues>;
    setError: import("react-hook-form").UseFormSetError<import("react-hook-form").FieldValues>;
    clearErrors: import("react-hook-form").UseFormClearErrors<import("react-hook-form").FieldValues>;
    setValue: import("react-hook-form").UseFormSetValue<import("react-hook-form").FieldValues>;
    trigger: import("react-hook-form").UseFormTrigger<import("react-hook-form").FieldValues>;
    resetField: import("react-hook-form").UseFormResetField<import("react-hook-form").FieldValues>;
    reset: import("react-hook-form").UseFormReset<import("react-hook-form").FieldValues>;
    handleSubmit: import("react-hook-form").UseFormHandleSubmit<import("react-hook-form").FieldValues, undefined>;
    unregister: import("react-hook-form").UseFormUnregister<import("react-hook-form").FieldValues>;
    register: import("react-hook-form").UseFormRegister<import("react-hook-form").FieldValues>;
    setFocus: import("react-hook-form").UseFormSetFocus<import("react-hook-form").FieldValues>;
    value: T;
};
