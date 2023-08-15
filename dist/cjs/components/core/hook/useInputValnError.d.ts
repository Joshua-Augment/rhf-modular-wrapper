export declare const useInputValAndError: <T = any>(name: string) => {
    watch: import("react-hook-form").UseFormWatch<import("react-hook-form").FieldValues>;
    getValues: import("react-hook-form").UseFormGetValues<import("react-hook-form").FieldValues>;
    getFieldState: import("react-hook-form").UseFormGetFieldState<import("react-hook-form").FieldValues>;
    setError: import("react-hook-form").UseFormSetError<import("react-hook-form").FieldValues>;
    clearErrors: import("react-hook-form").UseFormClearErrors<import("react-hook-form").FieldValues>;
    setValue: import("react-hook-form").UseFormSetValue<import("react-hook-form").FieldValues>;
    trigger: import("react-hook-form").UseFormTrigger<import("react-hook-form").FieldValues>;
    formState: import("react-hook-form").FormState<import("react-hook-form").FieldValues>;
    resetField: import("react-hook-form").UseFormResetField<import("react-hook-form").FieldValues>;
    reset: import("react-hook-form").UseFormReset<import("react-hook-form").FieldValues>;
    handleSubmit: import("react-hook-form").UseFormHandleSubmit<import("react-hook-form").FieldValues, undefined>;
    unregister: import("react-hook-form").UseFormUnregister<import("react-hook-form").FieldValues>;
    control: import("react-hook-form").Control<import("react-hook-form").FieldValues, any>;
    register: import("react-hook-form").UseFormRegister<import("react-hook-form").FieldValues>;
    setFocus: import("react-hook-form").UseFormSetFocus<import("react-hook-form").FieldValues>;
    value: (T & {}) | null;
    error: import("react-hook-form").FieldError | undefined;
};
