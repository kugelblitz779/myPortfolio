#include <iostream>
#include <vector>
using namespace std;

int main() {
    int t, n1, n2, sum1=0, sum2=0, i, j, k;
	cin>>t;
	vector<int> a;
	vector<int> b;
	for(i=0; i<t; i++){
	    cin>>n1>>n2;
	    for(j=0; j<n1; ++j){
	        cin>>a[j];
	    }
	    for(k=0; k<n1; ++k){
	        cin>>b[k];
	    }
	}
	for(j=0; j<n1; ++j){
	   sum1 = sum1 + a[j];
	}
	for(k=0; k<n1; ++k){
	   sum2 = sum2 + b[k];
	}
	if(sum1>sum2){
	    cout<<"C1"<<endl;
	}else{
	    cout<<"C2"<<endl;
	}
	
	
	
	
	return 0;
}