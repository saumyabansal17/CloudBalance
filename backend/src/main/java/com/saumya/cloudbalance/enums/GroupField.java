package com.saumya.cloudbalance.enums;


public enum GroupField {
    SERVICE,
    INSTANCE_TYPE,
    ACCOUNT_ID,
    USAGE_TYPE,
    PLATFORM,
    REGION,
    PURCHASE_OPTION,
    USAGE_TYPE_GROUP,
    API_OPERATION,
    RESOURCE,
    AVAILABILITY_ZONE,
    TENANCY,
    LEGAL_ENTITY,
    BILLING_ENTITY;

    public static boolean isValid(String value) {
        for (GroupField f : values()) {
            if (f.name().equals(value)) {
                return true;
            }
        }
        return false;
    }
}

