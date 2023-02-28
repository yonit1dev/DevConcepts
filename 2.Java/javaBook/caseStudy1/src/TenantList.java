package javaBook.caseStudy1.src;

import java.util.ArrayList;

public class TenantList {
    private ArrayList<Tenant> tList;
    public final int MAX;

    public TenantList(int max) {
        this.tList = new ArrayList<>();
        MAX = max;
    }

    public Tenant search(int room) {
        for (Tenant tenant : this.tList) {
            if (tenant.getRoom() == room) {
                return tenant;
            }
        }
        return null;
    }

    public Tenant getTenant(int index) {
        if (index < 1 || index > getTotal()) {
            return null;
        }
        return this.tList.get(index - 1);
    }

    public boolean isFull() {
        return this.tList.size() == MAX;
    }

    public boolean isEmpty() {
        return this.tList.isEmpty();
    }

    public int getTotal() {
        return this.tList.size();
    }

    public boolean addTenant(Tenant tenant) {
        if (this.isFull()) {
            return false;
        }
        this.tList.add(tenant);
        return true;
    }

    public boolean remove(int room) {
        Tenant exists = this.search(room);
        if (exists == null) {
            return false;
        }
        this.tList.remove(exists);
        return true;
    }

    @Override
    public String toString() {
        return tList.toString();
    }
}
