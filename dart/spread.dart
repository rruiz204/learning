List<int> firstList = [1, 2, 3];
List<int> secondList = [4, 5, 6];

List<int> thirdList = [...firstList, ...secondList];

Map<String, dynamic> firstMap = {'a': 1, 'b': 2};
Map<String, dynamic> secondMap = {'c': 3, 'd': 4};

Map<String, dynamic> thirdMap = {...firstMap, ...secondMap};

void main() {
  print(thirdList);
  print(thirdMap);
}