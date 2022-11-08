package com.example.backend.models;

public class User {
    private int id;
    private byte[] image;
    private String first_name;
    private String last_name;
    private String date_of_birth;
    private int age;
    private String email;
    private String house;
    private String street;
    private String city;
    private String state;
    private String zipcode;
    private int income;
    private String profession;
    private int referrals;
    private String gender;
    private String marital_status;
    private String signUp_date;

    private int referred_by; //foreign key pointing User
    private int branch_id; //foreign key pointing Branch
    //    private int agent_id; //foreign key pointing Agent
    private int auth_id;

    private String roles;

    public User(){}

    public void setReferrals(int referrals) {
        this.referrals = referrals;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    public byte[] getImage(){
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(String date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age){this.age=age;}

    public int getReferrals() {
        return referrals;
    }

    public void incrementReferrals(){
        referrals++;
    }

    // public void setReferrals(int referrals) {
    //     this.referrals = referrals;
    // }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getHouse() {
        return house;
    }

    public void setHouse(String house) {
        this.house = house;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public int getIncome() {
        return income;
    }

    public void setIncome(int income) {
        this.income = income;
    }

    public int getReferred_by() {
        return referred_by;
    }

    public void setReferred_by(int referred_by) {
        this.referred_by = referred_by;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getMarital_status() {
        return marital_status;
    }

    public void setMarital_status(String marital_status) {
        this.marital_status = marital_status;
    }

    public String getSignUp_date() {
        return signUp_date;
    }

    public void setSignUp_date(String signUp_date) {
        this.signUp_date = signUp_date;
    }

    public int getBranch_id() {
        return branch_id;
    }

    public void setBranch_id(int branch_id) {
        this.branch_id = branch_id;
    }

    public int getAuth_id() {
        return auth_id;
    }
    public void setAuth_id(int auth_id) {
        this.auth_id = auth_id;
    }
}
